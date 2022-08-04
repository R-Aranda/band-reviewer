class Artist < ApplicationRecord  
  validates :name, presence: true
  validates :bio, presence: true
  
  has_many :reviews
end