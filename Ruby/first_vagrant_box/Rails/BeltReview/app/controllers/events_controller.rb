class EventsController < ApplicationController
  def index
    @state_events = Event.where("state = ?", current_user.state)
    @outside_events = Event.where.not("state = ?", current_user.state)

  end

  def show
    @event = Event.find(params[:id])

  end

  def create
    event = Event.create(name: params[:name], date: params[:date], location: params[:location], state: params[:state], user: current_user)

    puts "here"
    if event.valid?
      redirect_to :back
    else
      flash[:errors] = event.errors.full_messages
      redirect_to :back
    end

  end

  def join
    event = Event.find(params[:event_id])
    JoiningUser.create(event: event, user: current_user)

    redirect_to :back
  end

  def canceljoin
    JoiningUser.find(params[:id]).destroy

    redirect_to :back
  end

  def delete
  end

  def createcomment
    event = Event.find(params[:id])
    Comment.create(content: params[:content], user: current_user, event: event)

    redirect_to :back
  end
end
