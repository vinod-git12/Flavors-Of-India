class RestaurantsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_restaurant, only: [:show, :update, :destroy]

  # GET /restaurants
  def index
    @restaurants = Restaurant.all

    render json: @restaurants, include: :reviews
  end

  # GET /restaurants/1
  def show
    @restaurant = Restaurant.find(params[:id])
    render json: @restaurant, include: :reviews
  end
  # POST /restaurants
  def create
    @restaurant = Restaurant.new(restaurant_params)
    @restaurant.user = @current_user
    if @restaurant.save
      render json: @restaurant, status: :created, location: @restaurant
    else
      render json: @restaurant.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /restaurants/1
  def update
    # @restaurant = @current_user.restaurants.find(params[:id])
    if @restaurant.update(restaurant_params)
      render json: @restaurant
    else
      render json: @restaurant.errors, status: :unprocessable_entity
    end
  end

  # DELETE /restaurants/1
  def destroy
    # @review = Review.find(params[:review_id])
    @restaurant = @current_user.restaurants.find(params[:id])
    @restaurant.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_restaurant
      @restaurant = Restaurant.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def restaurant_params
      params.require(:restaurant).permit(:name, :img_url, :address, :user_id)
    end
end
