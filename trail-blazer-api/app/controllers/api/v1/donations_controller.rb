module Api::V1
class DonationsController < ApplicationController
  before_action :set_donation, only: [:show, :update, :create, :destroy]

  # GET /donations
  def index
    @donations = Donation.all

    render json: @donations
  end

  # GET /donations/1
  def show
    render json: @donation
  end

  # POST /donations
  def create
   # @donation = Donation.new(donation_params)
   # moved logic to unused route /api/v1/users(.:format) api/v1/users#create 
   #reconnecting withg oup on how to generate the proper route
     @donation = Donation.create(amount: params[:amount], trails_id: params[:trails_id].to_i, name: params[:name], trail_solutions_id: params[:solutionId])

   # if @donation.save
    #  render json: @donation, status: :created, location: @donation
    #else
    #  render json: @donation.errors, status: :unprocessable_entity
   # end
  end

  # PATCH/PUT /donations/1
  def update
    if @donation.update(donation_params)
      render json: @donation
    else
      render json: @donation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /donations/1
  def destroy
    @donation.destroy
  end

 private
    # Use callbacks to share common setup or constraints between actions.
    def set_donation
     # @donation = Donation.create(amount: params[:amount], trails_id: params[:trails_id].to_i, name: params[:name], trail_solutions_id: params[:solutionId])

  #    if @donation.save
  #      render json: @donation, status: :created, location: @donation
  #    else
   #     render json: @donation.errors, status: :unprocessable_entity
   #   end
    end

     # Only allow a trusted parameter "white list" through.
    def donation_params
      params.fetch(:donation, {})
    end
end
end

