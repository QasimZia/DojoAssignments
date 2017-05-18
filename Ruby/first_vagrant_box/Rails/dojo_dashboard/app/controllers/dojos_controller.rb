class DojosController < ApplicationController
  def index
    @dojos = Dojo.all
  end

  def new

    render :new
  end

  def create
    @check = Dojo.create(branch: params[:branch], street: params[:street], city: params[:city], state: params[:state])

    if @check.valid?
      redirect_to "/"
    else
      flash[:errors] = @check.errors.full_messages
      redirect_to :back
    end
  end

  def edit
    @dojo = Dojo.find(params[:id])

    render :edit
  end

  def show
    @dojo = Dojo.find(params[:id])
    @students = @dojo.students
  end

  def delete
    Dojo.find(params[:id]).delete

    redirect_to "/"
  end

  def update
    @dojo = Dojo.find(params[:id])
    @dojo.update(dojo_params)

    redirect_to "/"
  end

  private
    def dojo_params
      params.require(:dojo).permit(:branch, :street, :city, :state)
    end  
end
