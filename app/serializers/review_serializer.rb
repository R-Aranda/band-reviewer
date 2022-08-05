class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :created_at, :artist_id
end
