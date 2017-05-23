class Secret < ApplicationRecord
  belongs_to :user
  has_many :likes
  has_many :users, through: :likes, source: :user
  validates :content, :user, presence: true
end
