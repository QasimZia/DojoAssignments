class UsersController < ApplicationController
  before_action :require_login, only: [:index, :edit, :update]
  def index
  end

  def new
  end

  def create
    u = User.create(name: params[:name], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation])

    if u.valid?
      session[:user_id] = u.id
      redirect_to controller: 'users', action: 'index', id: u.id
    else
      flash[:errors] = u.errors.full_messages
      redirect_to '/users/new'
    end
  end

  def edit
  end

  def update
    u = User.find(params[:id])

    u.update(name: params[:name], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation])

    if u.valid?
      redirect_to controller: 'users', action: 'index', id: u.id
    else
      flash[:errors] = u.errors.full_messages
      redirect_to controller: 'users', action: 'edit', id: u.id
    end

  end
end
