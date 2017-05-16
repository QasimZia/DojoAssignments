class HelloController < ApplicationController
    def index
        render text:"Hello CoindgDojo!"
    end 

    def say
        render text:"Saying Hello"
    end
end
