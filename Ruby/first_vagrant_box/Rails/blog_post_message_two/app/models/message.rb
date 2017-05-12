class Message < ApplicationRecord
  has_many :comments, as: :person_comment
  belongs_to :post
  belongs_to :user
  validates :author, presence: true
  validates :message, presence: true, length: { minimum: 15 } 
end
