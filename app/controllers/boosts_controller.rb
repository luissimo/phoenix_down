class BoostsController < ApplicationController

    def new
      @boost = Boost.new
    end

    def create
      @boost  = Boost.new(params[:boost])
      @boost.request = request
      respond_to do |format|
      if @boost.deliver
        format.html { redirect_to @boost, notice: 'Thank you, we will contact you on your email with further instructions.' }
        format.json { render :create, status: :created, location: @boost }
      else
        format.html { render :new }
        format.json { render json: @boost.errors, status: :unprocessable_entity }
      end
      end
    end
end
