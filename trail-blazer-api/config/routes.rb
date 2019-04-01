Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :new_trails
      resources :users, only: [:create, :update, :show]
      resources :ratings, only: [:create, :update, :show, :delete]
      resources :comments, only: [:create, :update, :show, :delete]
      resources :trail_solutions, only: [:create, :update, :show]
    end
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
