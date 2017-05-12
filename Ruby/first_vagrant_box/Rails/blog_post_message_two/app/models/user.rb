class User < ApplicationRecord
    has_many :posts
    has_many :owners
    has_many :messages
    has_many :comments
    has_many :blogs, through: :owners, dependent: :destroy
    has_many :comments, as: :person_comment
    EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
    validates :first_name, presence: true, length: { in: 2..20 }
    validates :last_name, presence: true, length: { in: 2..20 }
    validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
end
