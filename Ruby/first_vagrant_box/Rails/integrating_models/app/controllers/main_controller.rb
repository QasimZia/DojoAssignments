class MainController < ApplicationController
  def index
    # @users = User.all
    render json: User.all
  end

  def new

    render :new
  end

  def show
    render json: User.find(params[:id])
  end

  def create
    User.create(name: params[:name], age: params[:age])
    redirect_to "/users" and return
  end 
end
