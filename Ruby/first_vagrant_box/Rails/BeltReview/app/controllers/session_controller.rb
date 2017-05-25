class SessionController < ApplicationController
  def new
  end

  def create
    puts params[:email]
    user = User.find_by_email(params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      puts user.valid?
      redirect_to controller: 'events', action: 'index'
    else
      puts user.errors.full_messages
      flash[:errors] = user.errors.full_messages unless user == nil
      flash[:errors] = ['User not found'] if user == nil

      if user.try(:authenticate, params[:password]) == false
        flash[:errors] = ['Wrong email/password']
        redirect_to '/' and return
      end
      
      redirect_to '/'
    end

  end
end
