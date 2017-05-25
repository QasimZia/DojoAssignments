class User < ApplicationRecord
  has_secure_password
  has_many :events, dependent: :destroy
  has_many :joining_users, dependent: :destroy
  has_many :events_joining, through: :joining_user, source: :event
  has_many :comments, dependent: :destroy
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :first_name, :last_name, :email, :location, :state, presence: true
  validates :email, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
  validates :password, length: { minimum: 8 }
  before_save :email_downcase

  def email_downcase
    self.email.downcase
  end
end
