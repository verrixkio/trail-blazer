Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :new_trails
<<<<<<< HEAD

=======
      resources :trails
      resources :users
      resources :ratings
      resources :comments
      resources :trail_solutions
>>>>>>> 51a3744a25b0e764ed5debddf48339a06b682287
    end
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
