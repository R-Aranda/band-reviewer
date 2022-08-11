class Review < ApplicationRecord
  validates :rating, presence: true
  validates :title, presence: true
  validates :body, presence: true
  
  belongs_to :artist
  has_many :votes 
end