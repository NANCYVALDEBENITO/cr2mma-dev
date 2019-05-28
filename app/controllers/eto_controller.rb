class EtoController < ApplicationController
  
  def index
  	@year  = params[:year]
  	@month = params[:month]
  	@day   = params[:day]
  	
  	puts @year
  	puts @month
  	puts @day
  end
  
end