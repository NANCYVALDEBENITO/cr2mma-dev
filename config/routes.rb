Rails.application.routes.draw do
 
  
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  
  devise_for :users,  controllers: {
      registrations: 'users/registrations',
      sessions: 'users/sessions'

  }
  #resources :users

  root to: 'eto#index'
  #root to: 'eto#index'
  #root to: 'page#index'
  get 'about/about'
  get 'about/example'



  #get 'page/contornos', :defaults => { :format => 'json' }
  #get 'page/geojson', :defaults => { :format => 'json' }
  #post 'first/save'

end
