class BoostsController < ApplicationController

    def new
      @boost = Boost.new
    end

    def create
      @boost  = Boost.new(params[:boost])
      @boost.request = request
      if @boost.deliver
        flash.now[:notice] = "Thank you very much, we will contact you on your email with further instructions"
      else
        flash.now[:error]  = "Something went wrong, please try again."
        render :new
      end
    end

end
