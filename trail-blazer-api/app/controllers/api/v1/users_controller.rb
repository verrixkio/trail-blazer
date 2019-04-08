module Api::V1
    class UsersController < ApplicationController
        def index
            @users = User.all
            render json: @users
        end
        def create
            # logic for adding a donations, useing this route until reconzong with group on how to generate the proper route
            @donation = Donation.create(amount: params[:amount], trails: params[:trails_id].to_i, name: params[:name], trail_solutions: params[:solutionId])

            if @donation.save
              render json: @donation, status: :created, location: @donation
            else
              render json: @donation.errors, status: :unprocessable_entity
            end
        end
    end
end
