class Review < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true
  
  belongs_to :artist
end