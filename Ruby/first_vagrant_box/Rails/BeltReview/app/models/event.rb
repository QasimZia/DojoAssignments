class Event < ApplicationRecord
  belongs_to :user
  has_many :joining_users
  has_many :comments, dependent: :destroy
  has_many :users_joining, through: :joining_users, source: :user
  # has_many comments 
  # has_many users through comments
  # has_many joining_users 
  validates :name, :date, :location, :state, :user, presence: true
end
