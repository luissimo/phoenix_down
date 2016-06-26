Rails.application.routes.draw do

  ## devise
  devise_for :users
  ## boost form
  match '/boosts', to: 'boosts#new', via: 'get'
  resources :boosts,   only: [:new, :create]
  ## contact form
  match '/contacts', to: 'contacts#new', via: 'get'
  resources :contacts, only: [:new, :create]


  root                           'pages#index'
  get 'boosters'             =>  'pages#boosters'
  get 'lol'                  =>  'pages#lol'
  get 'faqs'                 =>  'pages#faq'
  get 'faqs-boost'           =>  'pages#faq_about_elo_boost'
  get 'faqs-services'        =>  'pages#faq_about_our_services'
  get 'faqs-process'         =>  'pages#faq_boosting_process'
  get 'faqs-contact'         =>  'pages#faq_contact_booster'
  get 'faqs-payment'         =>  'pages#faq_payment'
  get 'faqs-safety'          =>  'pages#faq_safety_security'
  get 'elo-boost'            =>  'pages#elo_boost'
  get 'success'              =>  'pages#success'
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
