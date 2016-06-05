module ApplicationHelper


  def full_title(page_title = '')
    base_title = "Leauge of Legends ELO Boosting"
    if page_title.empty?
      base_title
    else
      "#{page_title} | #{base_title}"
    end
  end

  def resource_name
    :user
  end

  def resource
    @resource ||= User.new
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end

  def resource_contact_new
    @boost_form = Contact.new
  end

  def resource_contact_create
    @boost_form = Contact.new(params[:contact])
    @boost_form.request = request
    if @boost_form.deliver
      flash.now[:notice] = "Thank you very much, we will contact you on your email with further instructions"
    else
      flash.now[:error]  = "Please fill in valid details"
      render 'devise/registrations/edit'
    end
  end
end
