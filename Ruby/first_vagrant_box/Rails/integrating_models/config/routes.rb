Rails.application.routes.draw do
  get "users" => "main#index"
  get "users/new" => "main#new"
  post "users/create" => "main#create"
  get "users/:id" => "main#show"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
