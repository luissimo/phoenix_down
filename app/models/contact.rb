class Contact < MailForm::Base
  attribute :paypal_id,              :validate => true
  attribute :email,                  :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message
  attribute :account_name,           :validate => true
  attribute :password,               :validate => true
  attribute :password_confirmation,  :validate => true
  attribute :nickname,               :captcha  => true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
        :subject => "Boost form filled in",
        :to => "afg.010@hotmail.com",
        :from => %("#{paypal_id}" <#{email}>)
    }
  end

end