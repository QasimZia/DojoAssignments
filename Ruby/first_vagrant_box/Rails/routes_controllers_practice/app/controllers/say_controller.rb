class SayController < ApplicationController
    def index
        render text:"What do you want me to say??"
    end

    def joe
        render text:"Saying Hello Joe!"
    end

    def michael
        redirect_to "say/hello/joe"
    end

    def times
        session[:count] ||= 0
        render text:"You have visited this url #{session[:count]+= 1} time(s)"
    end

    def restart
        session[:count] = nil
        render text:"Destroyed the session"
    end
end
