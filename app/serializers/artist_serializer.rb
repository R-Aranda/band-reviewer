class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :genre, :website

  has_many :reviews
end
