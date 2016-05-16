Rails.application.routes.draw do

  devise_for :users
  root                          'pages#index'
  get 'boosting'            =>  'pages#boosting'
  get 'boosters'            =>  'pages#boosters'
  get 'faqs'                =>  'pages#faq'
  get 'contact'             =>  'pages#contact'
  get 'division_boost'      =>  'pages#division_boost'
  get 'win_boost'           =>  'pages#win_boost'
  get 'duo_queue'           =>  'pages#duo_queue'
  get 'placement_matches'   =>  'pages#placement_matches'
  get 'normal_draft'        =>  'pages#normal_draft'
  get 'budget_boosting'     =>  'pages#budget_boosting'

# https://intense-harbor-93889.herokuapp.com/ | https://git.heroku.com/intense-harbor-93889.git

end
