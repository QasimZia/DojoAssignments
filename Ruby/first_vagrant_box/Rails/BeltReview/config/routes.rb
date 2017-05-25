Rails.application.routes.draw do
  #session routes
  get '' => 'session#new'

  post '/session/create' => 'session#create'

  #user routes

  get 'users/new' => 'users#new'

  post 'users/create' => 'users#create'

  get 'users/:id/edit' => 'users#edit'

  post 'users/:id' => 'users#update'

  get 'users/logout' => 'users#logout'

  #event routes
  get 'events/' => 'events#index'

  post 'events/create' => 'events#create'
  
  get 'events/:id' => 'events#show'

  get 'events/:event_id/join' => 'events#join'

  get 'events/:id/canceljoin' => 'events#canceljoin'

  post 'comment/:id/create' => 'events#createcomment'

  get 'events/:id/edit' => 'events#edit'

  delete 'events/:id' => 'events#delete'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
