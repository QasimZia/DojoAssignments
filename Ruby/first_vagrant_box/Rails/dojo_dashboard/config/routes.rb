Rails.application.routes.draw do
  get '' => 'dojos#index'
  get 'new' => 'dojos#new'
  post 'create' => 'dojos#create'
  get 'edit/:id' => 'dojos#edit'
  get 'show/:id' => 'dojos#show'
  delete 'delete/:id' => 'dojos#delete'
  patch 'update/:id' => 'dojos#update'

  get ':dojo_id/students' => 'students#index'
  get ':dojo_id/students/new' => 'students#new'
  post ':dojo_id/students' => 'students#create'
  get ':dojo_id/students/:id' => 'students#show'
  get ':dojo_id/students/:id/edit' => 'students#edit'
  patch ':dojo_id/students/:id' => 'students#update'
  delete ':dojo_id/students/:id' => 'students#delete'
end
