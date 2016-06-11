class ContactsController < ApplicationController

  def new
    @contact = Contact.new
  end

  def create
    @contact  = Contact.new(params[:contact])
    @contact.request = request
    respond_to do |format|
      if @contact.deliver
        format.html { redirect_to @contact, notice: 'Thank you for sending us a message, we will contact you as soon as possible.' }
        format.json { render :create, status: :created, location: @contact }
      else
        format.html { render :new }
        format.json { render json: @contact.errors, status: :unprocessable_entity }
      end
    end
  end

end
