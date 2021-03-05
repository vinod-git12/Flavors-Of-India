Rails.application.routes.draw do
  resources :reviews
  resources :restaurants
  resources :users
  # resources :flavors, only: :index
  # resources :foods
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  put '/flavors/:flavor_id/foods/:id', to: 'flavor_foods#add_flavor_to_food'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
