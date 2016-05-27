Rails.application.routes.draw do

  devise_for :users
  root                          'pages#index'
  get 'boosting'            =>  'pages#boosting'
  get 'boosters'            =>  'pages#boosters'
  get 'faqs'                =>  'pages#faq'
  get 'contact'             =>  'pages#contact'
  get 'elo-boost'           =>  'pages#elo_boost'
  get 'division-boost'      =>  'pages#division_boost'
  get 'win-boost'           =>  'pages#win_boost'
  get 'duo-queue'           =>  'pages#duo_queue'
  get 'placement-matches'   =>  'pages#placement_matches'
  get 'normal-draft'        =>  'pages#normal_draft'
  get 'budget-boosting'     =>  'pages#budget_boosting'


# https://intense-harbor-93889.herokuapp.com/ | https://git.heroku.com/intense-harbor-93889.git

end
