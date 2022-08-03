class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body

  belongs_to :artist
end
