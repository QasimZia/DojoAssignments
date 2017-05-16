Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "hello" => "hello#index"
  get "say/hello" => "hello#say"
  get "say/hello/joe" => "say#joe"
  get "say/hello/michael" => "say#michael"
  get "" => "say#index"
  get "times" => "say#times"
  get "times/restart" => "say#restart"
end
