class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :title, :body, :created_at, :artist_id

  has_many :votes
end
