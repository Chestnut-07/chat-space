class Chat < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validatus :message,presence: true, unless: :image? #カラムが空であれば
end
