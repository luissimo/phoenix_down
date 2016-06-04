class PagesController < ApplicationController
  before_action :authenticate_user!, only:  [:boosters]


  def index
  end

  def elo_boost
  end

  def boosters
  end

  def faq
  end

  def faq_about_our_services
  end

  def faq_contact_booster
  end

  def faq_boosting_process
  end

  def faq_payment
  end

  def faq_safety_security
  end

  def faq_about_elo_boost
  end

  def contact
  end

  def success
  end
end
