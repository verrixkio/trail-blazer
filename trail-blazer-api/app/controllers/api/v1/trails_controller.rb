module Api::V1
    class TrailsController < ApplicationController
        def index
            @trails = Trail.all
            render json: @trails
        end
        def show
            number = params[:id].to_i
            objLocator = number - 1
            @allTrails = Trail.all
            render json: @allTrails[objLocator]
        end
    end   
end
