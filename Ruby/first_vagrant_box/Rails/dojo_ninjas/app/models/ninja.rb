class Ninja < ApplicationRecord
  belongs_to :dojo
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :dojo, presence: true
end
