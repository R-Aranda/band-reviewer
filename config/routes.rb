Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/artists', to: "homes#index"
  get '/artists/new', to: "homes#auth"
  get '/artists/:id', to: "homes#index"
  get '/users/:id', to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :artists, only: [:index, :show, :create]
      resources :users, only: [:index, :show]
    end
  end
end
