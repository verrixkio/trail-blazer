Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :new_trails
      resources :trails
      resources :donations
      resources :users
      resources :ratings
      resources :comments
      resources :trail_solutions
      
    end
end
get '/trails/api/v1/:name/:id', to: redirect('/api/v1/%{name}/%{id}')
get '/trails/api/v1/:name', to: redirect('/api/v1/%{name}')

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
