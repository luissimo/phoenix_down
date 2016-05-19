class PagesController < ApplicationController
  before_action :authenticate_user!, only:  [:boosters]

  def index
  end

  def division_boost
  end

  def win_boost
  end

  def budget_boosting
  end

  def boosters
  end

  def faq
  end

  def contact
  end

  def jobs
  end
end
