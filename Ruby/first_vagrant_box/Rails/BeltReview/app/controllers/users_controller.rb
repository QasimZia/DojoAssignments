class UsersController < ApplicationController
  def new
  end

  def create
    user = User.create(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], location: params[:location], state: params[:state], password: params[:password], password_confirmation: params[:password_confirmation])

    if user.valid?
      session[:user_id] = user.id
      redirect_to controller: 'events', action: 'index'
    else
      flash[:errors] = user.errors.full_messages
      redirect_to :back
    end
  end

  def edit
  end

  def update
    user = User.find(current_user.id)
    if user.update(user_params)
        flash[:errors] = user.errors.full_messages
        redirect_to '/events'
    else
      flash[:errors] = user.errors.full_messages
      puts user.errors.full_messages
      redirect_to :back
    end
  end

  def logout
    session[:user_id] = nil
    redirect_to '/'
  end
  private
  def user_params 
    params.require(:user).permit(:first_name, :last_name, :location, :state, :password, :password_confirmation)
  end
end
