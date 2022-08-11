class Vote < ApplicationRecord
    validates :upvote, presence: true, numericality: { in: 0..1 }
    validates :downvote, presence: true, numericality: { in: 0..1 }
    
    belongs_to :review
    belongs_to :user
  end