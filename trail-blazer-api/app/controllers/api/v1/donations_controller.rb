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
     @donation = Donation.create(amount: params[:amount], trails: params[:trails_id].to_i, name: params[:name], trail_solutions: params[:solutionId])

    if @donation.save
      render json: @donation, status: :created, location: @donation
    else
      render json: @donation.errors, status: :unprocessable_entity
    end
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
      @donation = Donation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def donation_params
      params.fetch(:donation, {})
    end
end
