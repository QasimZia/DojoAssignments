class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :person_comment, polymorphic: true
end
