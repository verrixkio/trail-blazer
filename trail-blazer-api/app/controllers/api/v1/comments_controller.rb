module Api::V1
    class CommentsController < ApplicationController
        def index
            @comments = Comment.all
            render json: @comments
        end

        def create
            Comment.create(data: params[:data], name: params[:name])
        end
            
    end
end