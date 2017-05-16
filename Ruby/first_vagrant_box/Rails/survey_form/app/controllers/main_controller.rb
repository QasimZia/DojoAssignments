class MainController < ApplicationController
  def index

    render :index
  end

  def proc
    session[:full_name] = params[:full_name]
    session[:location] = params[:location]
    session[:language] = params[:language]
    session[:comments] = params[:comments]

    redirect_to "/result"
  end

  def result
    session[:count] ||= 0

    render :result
  end
end
