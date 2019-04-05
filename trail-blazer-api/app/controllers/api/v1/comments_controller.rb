module Api::V1
    class CommentsController < ApplicationController
        def index
            @comments = Comment.all
            render json: @comments
        end

        def create
            Comment.create!(id: 3, data: params[:data])
        end
            
    end
end