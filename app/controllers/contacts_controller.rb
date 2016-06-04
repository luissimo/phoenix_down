class ContactsController < ApplicationController

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:notice] = "Thank you very much, we will contact you on your email with further instructions"
    else
      flash.now[:error]  = "Something went wrong, please try again."
      render :new
    end
  end
end
