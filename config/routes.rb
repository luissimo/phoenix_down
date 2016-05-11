Rails.application.routes.draw do

  root                      'pages#index'
  get 'boosting'        =>  'pages#boosting'
  get 'boosters'        =>  'pages#boosters'
  get 'faqs'            =>  'pages#faq'
  get 'contact'         =>  'pages/contact'

end
