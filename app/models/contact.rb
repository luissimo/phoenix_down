class Contact < MailForm::Base
  attribute :email,      :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :subject,    :validate => true
  attribute :message,    :validate => true
  attribute :nickname,   :captcha  => true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
        :subject => "Contact Form",
        :to => "afg.010@hotmail.com, khijbar@gmail.com",
        :from => %("#{subject}"  <#{email}>)
    }
  end
end