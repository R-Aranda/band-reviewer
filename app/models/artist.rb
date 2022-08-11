class Artist < ApplicationRecord  
  validates :name, presence: true
  validates :bio, presence: true
  validates :photo, format: URI::DEFAULT_PARSER.make_regexp(%w[http https])
  has_many :reviews
end