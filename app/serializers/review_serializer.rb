class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :title, :body, :created_at, :artist_id, :user_id, :votes
  has_many :votes
end
