class Contact < MailForm::Base
  attribute :paypal_id,                      :validate => true
  attribute :email,                          :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message
  attribute :account_name,                   :validate => true
  attribute :account_password,               :validate => true
  attribute :account_password_confirmation,  :validate => true
  attribute :nickname,                       :captcha  => true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
        :subject => "Boost form filled in",
        :to => "afg.010@hotmail.com, khijbar@gmail.com",
        :from => %("#{account_name}" <#{email}>)
    }
  end
end
