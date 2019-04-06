module Api::V1
    class RatingsController < ApplicationController
        def index
            @ratings = Rating.all
            render json: @ratings
        end
        def create
            puts "rating created"
            Rating.create(feedback: params[:rating], trails_id: params[:trailId].to_i, users_id: 1)
        end
    end
end