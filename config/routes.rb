Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/artists', to: "homes#index"
  get '/artists/new', to: "homes#auth"
  get '/artists/:id', to: "homes#index"
  get '/users/:id', to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :artists, only: [:index, :show, :create, :destroy]  do
        resources :reviews, only: [:create]
      end
    end
  end
end
