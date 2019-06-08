Rails.application.routes.draw do
 
  
  devise_for :users,  controllers: {
      registrations: 'users/registrations',
      sessions: 'users/sessions'

  }
  get 'eto/index'
  #root to: 'eto#index'
  root to: 'page#index'



  #get 'page/contornos', :defaults => { :format => 'json' }
  #get 'page/geojson', :defaults => { :format => 'json' }
  #post 'first/save'

end
