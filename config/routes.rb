Rails.application.routes.draw do
 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'eto#index'

  get 'page/index'
  
  get 'page/contornos', :defaults => { :format => 'json' }
  get 'page/geojson', :defaults => { :format => 'json' }
  post 'first/save'

end
