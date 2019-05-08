Rails.application.routes.draw do
  root 'pages#welcome'
  get 'menu/new', to: 'menu#new'
  get 'about', to: 'pages#about'
end
