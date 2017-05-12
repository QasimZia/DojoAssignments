class Blog < ApplicationRecord
    has_one :users, through: :owners
    has_many :posts, dependent: :destroy
    has_many :owners
    has_many :comments, as: :person_comment    
    validates :name, presence: true
    validates :description, presence: true
end
