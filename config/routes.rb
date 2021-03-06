Rails.application.routes.draw do

  resources :reviews
  resources :restaurants
  resources :users
  resources :reviews, only: :index
  resources :restaurants

  resources :users do
    resources :restaurants do
      resources :reviews

      post '/auth/login', to: 'authentication#login'
      get '/auth/verify', to: 'authentication#verify'
      resources :users, only: :create
    end
  end
end

  # put '/review/:review_id/reviews/:id', to: 'flavor_foods#add_flavor_to_food'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

