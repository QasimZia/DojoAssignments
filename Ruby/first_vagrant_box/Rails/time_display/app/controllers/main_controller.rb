require 'date'
class MainController < ApplicationController
    def index
        @time = Time.now.strftime("%m/%d/%Y %H:%M")
        render :index
    end
end
