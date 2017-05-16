class RpgController < ApplicationController
  def index
    session[:gold] ||= 0
    session[:activity] ||= []


    render :index
  end

  # def farm
  #   curr_time = Time.now
  #   currentAmt = rand(10..20)
  #   session[:gold] += currentAmt
  #   session[:activity] << "Earned #{currentAmt} from Farm @ #{curr_time}"

  #   print session[:activity]
  #   redirect_to "/"
  # end

  # def cave
  #   curr_time = Time.now
  #   currentAmt = rand(5..10)
  #   session[:gold] += currentAmt
  #   session[:activity] << "Earned #{currentAmt} from Cave @ #{curr_time}"

  #   redirect_to "/"
  # end

  # def casino
  #   curr_time = Time.now
  #   currentAmt = rand(-50..50)
  #   session[:gold] += currentAmt
  #   if currentAmt > 0 
  #     session[:activity] << "Earned #{currentAmt} from Casino @ #{curr_time}"
  #   else
  #     session[:activity] << "Lost #{currentAmt} from Casino @ #{curr_time}"
  #   end
  
  #   redirect_to "/"
  # end

  # def house
  #   curr_time = Time.now
  #   currentAmt = rand(2..5)
  #   session[:gold] += currentAmt
  #   session[:activity] << "Earned #{currentAmt} from House @ #{curr_time}"

  #   redirect_to "/"
  # end

  def handle
    curr_time = Time.now
    if params[:building] == 'farm'
      gold = rand(10..20)
    elsif params[:building] == 'cave'
      gold = rand(5..10)
    elsif params[:building] == 'house'
      gold = rand(2..5)
    elsif params[:building] == 'casino'
      gold = rand(-50..50)
    end

    if gold > 0
      session[:activity] << "Earned #{gold} @ the #{params[:building]} @ #{curr_time}"
    else
      session[:activity] << "Lost #{gold} @ the #{params[:building]} @ #{curr_time}"
    end

    session[:gold] += gold

    redirect_to "/"
  end

  def clear
    session[:gold] = 0
    session[:activity] = []

    redirect_to "/"
  end 
end
