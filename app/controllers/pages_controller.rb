class PagesController < ApplicationController
  before_action :authenticate_user!, only:  [:boosters]

  def index
  end

  def boosting
  end

  def division_boost
  end

  def win_boost
  end

  def duo_queue
  end

  def placement_matches
  end

  def normal_draft
  end

  def budget_boosting
  end

  def boosters
  end

  def faq
  end

  def contact
  end
end
