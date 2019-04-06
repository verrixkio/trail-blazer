module Api::V1
    class CommentsController < ApplicationController
        def index
            @comments = Comment.all
            render json: @comments
        end

        def create
            puts params, 'these are the params!'
            puts params[:trail_id].to_i, 'this is a numbeR!!'
            Comment.create(data: params[:data], name: params[:name], trails_id: params[:trail_id].to_i)
        end

        def show
            array = Array.new
            number = params[:id].to_i
        
            commentLength = Comment.all.length
            # create a loop that goes through each element of the array 
            Comment.all.each do |comment|
               
                if number == comment.trails_id
                     array << comment
                 end

                end
            render json: array
        end
            
    end
end