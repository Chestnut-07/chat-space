Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "groups#index"
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:create, :new, :edit, :update] do
    resources :messages, only: [:index, :create]
    #namespace ディレクトリィ名 do ~ endと囲む形でルーティングを記述する。
    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  end
end
