Rails.application.routes.draw do
  get '' => 'session#new'

  get 'session/new' => 'session#new'

  post 'session/create' => 'session#create'
  
  get 'users/new' => 'users#new'

  get 'users/:id' => 'users#index'

  get 'secrets/' => 'secrets#index' 

  post 'secrets/create' => 'secrets#create'

  delete 'secrets/:id/destroy' => 'secrets#delete'

  get 'secrets/like/:id' => 'secrets#like'

  post 'users/create' => 'users#create'
  
  get 'users/:id/edit' => 'users#edit'

  patch 'users/:id/update' => 'users#update'

  delete 'session/:id' => 'session#destroy'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
