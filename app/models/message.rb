class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :content, presence: true, unless: :image? #imageカラムが空の場合、contentカラムも空であれば保存しない

  mount_uploader :image, ImageUploader
end
