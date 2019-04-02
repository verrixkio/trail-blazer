module Api::V1
    class TrailSolutionsController < ApplicationController
        def index
            @trail_solutions = TrailSolution.all
            render json: @trail_solutions
        end
    end
end