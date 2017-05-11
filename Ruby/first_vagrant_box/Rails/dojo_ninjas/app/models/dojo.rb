class Dojo < ApplicationRecord
    has_many :ninjas
    validates :name, presence: true
    validates :city, presence: true
    validates :state, presence: true, length: { is: 2 }
end
