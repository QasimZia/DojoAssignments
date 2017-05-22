class SecretsController < ApplicationController
    def index
        @secrets = Secret.all
    end

    def create

    end

    def destroy

    end
end
