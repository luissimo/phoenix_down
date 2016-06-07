module ContactsHelper

  def new
    @contact_page = Contact.new
  end

  def create
    @contact_page = Contact.new(params[:contact])
    @contact_page.request = request
    if @contact_page.deliver
      flash.now[:notice] = "Thank you very much, we will contact you on your email with further instructions"
    else
      flash.now[:error]  = "Something went wrong, please try again."
      render :new
    end
  end

end
