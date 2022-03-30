source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.4.4'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.3'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
# Use Puma as the app server
gem 'puma', '~> 4.3'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'mini_racer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'
gem 'devise', git: 'https://github.com/plataformatec/devise.git'
gem 'country_select', '~> 4.0'
gem 'activeadmin', git: 'https://github.com/activeadmin/activeadmin'
gem 'leaflet-rails', '~> 0.7.7'
gem 'chartkick'
gem 'groupdate'
#gem 'Leaflet-export', git: 'https://github.com/Flexberry/Leaflet.Export.git'
#gem 'leaflet-rails', github: 'axyjo/leaflet-rails', ref: '7eab9e5d01faa3fadce0650491c0c911ae36d0b9'
gem 'leaflet-js'
gem 'leaflet-awesome-markers-rails', '~> 2.0'
gem 'plotlyjs-rails'
#gem 'mapknitter', git:'https://github.com/publiclab/mapknitter.git'
#gem 'leaflet-geotiff', git:'https://github.com/stuartmatthews/leaflet-geotiff'
gem 'jquery-rails', '~> 4.3', '>= 4.3.1'
gem 'narray', '~> 0.6.1.2'
gem 'narray_miss', '~> 1.4'

#gem 'gentooboontoo-ruby-netcdf', git:'https://github.com/gentooboontoo/gentooboontoo-ruby-netcdf'
gem 'open_street_map', git:'https://github.com/WebGents/open_street_map'
gem 'openlayers-rails', '~> 0.0.4'
#gem 'map_layers', git:' https://github.com/maplayers/map_layers'
#gem 'numru-narray', git:'https://github.com/gfd-dennou-club/numru-narray'
#gem 'NMath'
# Use ActiveStorage variant
# gem 'mini_magick', '~> 4.8'
#
gem 'momentjs-rails', '>= 2.9.0'
gem 'bootstrap3-datetimepicker-rails', '~> 4.14.30'
# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  # Easy installation and use of chromedriver to run system tests with Chrome
  gem 'chromedriver-helper'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
