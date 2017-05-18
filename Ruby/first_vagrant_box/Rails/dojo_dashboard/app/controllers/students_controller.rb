class StudentsController < ApplicationController
  def index
  end

  def new
    @dojo = Dojo.find(params[:dojo_id])
    @dojos = Dojo.all
  end

  def create
    dojo = Dojo.find(params[:dojo])
    Student.create(first_name:params[:first_name], last_name:params[:last_name], email:params[:email], dojo:dojo)

    redirect_to "/"
  end

  def edit
    @student = Student.find(params[:id])
    @dojo = Dojo.find(params[:dojo_id])
    @dojos = Dojo.all
  end

  def show
    @dojo = Dojo.find(params[:dojo_id])
    @student = Student.find(params[:id])

  end

  def delete
    Student.find(params[:id]).delete

    redirect_to :back
  end

  def update
    @student = Student.find(params[:id])
    @dojo = Dojo.find(params[:student][:dojo])
    @student.update(student_params(@dojo))

    redirect_to "/show/" + params[:dojo_id]
  end
  private
    def student_params dojo
      params.require(:student).permit(:first_name, :last_name, :email, dojo)
    end
end
