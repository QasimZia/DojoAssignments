class SessionController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user.try(:authenticate, params[:password])
      session[:user_id] = user.id
      redirect_to controller: 'users', action: 'index', id: user.id
    else
      flash[:errors] = user.errors.full_messages unless user == nil
      flash[:errors] = ['User not found, try again'] if user == nil

      if user.try(:authenticate, params[:password]) == false
        flash[:errors] = ['Wrong email/password']
        redirect_to '/session/new' and return
      end
      
      redirect_to '/session/new'
    end

  end

  def destroy
    session[:user_id] = nil
    redirect_to '/session/new'
  end
end
