class Review < ApplicationRecord
  validates :rating, presence: true
  validates :title, presence: true
  validates :body, presence: true
  
  belongs_to :artist
  belongs_to :user
end