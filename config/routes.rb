Rails.application.routes.draw do
  namespace :api do
    get 'users/show'
  end

  namespace :api do
    get 'users/create'
  end

  namespace :api do
    get 'users/new'
  end

  namespace :api do
    get 'users/destroy'
  end

  namespace :api do
    get 'users/update'
  end

  namespace :api do
    get 'users/edit'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
