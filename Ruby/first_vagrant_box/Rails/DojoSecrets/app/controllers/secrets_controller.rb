class SecretsController < ApplicationController
    def index
        @secrets = Secret.all
        @likes = Like.all

    end

    def create
        s = Secret.create(content: params[:content], user: current_user)

        if s.valid?
            redirect_to :back
        else
            flash[:errors] = s.errors.full_messages
            redirect_to :back
        end

    end

    def destroy

    end
end
