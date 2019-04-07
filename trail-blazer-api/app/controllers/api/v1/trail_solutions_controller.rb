module Api::V1
    class TrailSolutionsController < ApplicationController
        def index
            @trail_solutions = TrailSolution.all
            render json: @trail_solutions
        end

        def create
            puts "hello I'm create"
            TrailSolution.create(trails_id: params[:trails_id], description_to_fix: params[:description_to_fix], timeline_days: params[:timeline_to_fix], cost: params[:cost], collaboration: params[:collaboration])
        end
    end
end