module Api::V1
  class NewTrailsController < ApplicationController
    before_action :set_new_trail, only: [:show, :update, :destroy]

    # GET /new_trails
    def index
      @new_trails = NewTrail.all
      render json: @new_trails
    end

    # GET /new_trails/1
    def show
      render json: @new_trail
    end

    # POST /new_trails
    def create
      @new_trail = NewTrail.new(new_trail_params)

      if @new_trail.save
        render json: @new_trail, status: :created, location: @new_trail
      else
        render json: @new_trail.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /new_trails/1
    def update
      if @new_trail.update(new_trail_params)
        render json: @new_trail
      else
        render json: @new_trail.errors, status: :unprocessable_entity
      end
    end

    # DELETE /new_trails/1
    def destroy
      @new_trail.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_new_trail
        @new_trail = NewTrail.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def new_trail_params
        params.require(:new_trail).permit(:name)
      end
  end
end
