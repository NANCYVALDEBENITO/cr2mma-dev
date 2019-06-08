
class EtoController < ApplicationController
  before_action :authenticate_user!

  def index
  	@year  = params[:year]
  	@month = params[:month]
  	@day   = params[:day]
  	
  	puts @year
  	puts @month
  	puts @day
  end

  def search
  end
end