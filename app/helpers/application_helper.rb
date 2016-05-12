module ApplicationHelper

  def full_title(page_title = '')
    base_title = "Ruby on Rails tutorial sample app"
    if page_title.empty?
      base_title
    else
      "#{page_title} | #{base_title}"
    end
  end
=begin
  <% provide(:title, "About") %>
=end
end
