Rails.application.routes.draw do
  get '' => 'rpg#index'

  post 'handle' => 'rpg#handle'

  # post 'farm' => 'rpg#farm'

  # post 'cave' => 'rpg#cave'

  # post 'casino' => 'rpg#casino'

  # post 'house' => 'rpg#house'

  get 'clearses' => 'rpg#clear'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
