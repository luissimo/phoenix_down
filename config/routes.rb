Rails.application.routes.draw do

  ## devise
  devise_for :users
  ## boost form
  match '/boosts', to: 'boosts#new', via: 'get'
  resources :boosts,   only: [:new, :create]
  ## contact form
  match '/contacts', to: 'contacts#new', via: 'get'
  resources :contacts, only: [:new, :create]


  root                          'pages#index'
  get 'boosting'             =>  'pages#boosting'
  get 'boosters'             =>  'pages#boosters'
  get 'faqs'                 =>  'pages#faq'
  get 'faqs_boost'           =>  'pages#faq_about_elo_boost'
  get 'faqs_services'        =>  'pages#faq_about_our_services'
  get 'faqs_process'         =>  'pages#faq_boosting_process'
  get 'faqs_contact'         =>  'pages#faq_contact_booster'
  get 'faqs_payment'         =>  'pages#faq_payment'
  get 'faqs_safety'          =>  'pages#faq_safety_security'
  get 'elo_boost'            =>  'pages#elo_boost'
  get 'division-boost'       =>  'pages#division_boost'
  get 'win-boost'            =>  'pages#win_boost'
  get 'duo-queue'            =>  'pages#duo_queue'
  get 'success'              =>  'pages#success'
  get 'placement-matches'    =>  'pages#placement_matches'
  get 'normal-draft'         =>  'pages#normal_draft'
  get 'budget-boosting'      =>  'pages#budget_boosting'
  get 'profiles'             =>  'profiles#index'
  get 'profiles/sailor'      =>  'profiles#sailor'
  get 'profiles/efefrompower'=>  'profiles#efefrompower'
  get 'profiles/elpomponero' =>  'profiles#elpomponero'
  get 'profiles/joosta'      =>  'profiles#joosta'
  get 'profiles/kerstman'    =>  'profiles#kerstman'
  get 'profiles/sinterklaas' =>  'profiles#sinterklaas'
  get 'profiles/verstappen'  =>  'profiles#verstappen'
  get 'profiles/wessex'      =>  'profiles#wessex'


# https://intense-harbor-93889.herokuapp.com/ | https://git.heroku.com/intense-harbor-93889.git

end
