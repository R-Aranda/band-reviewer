class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :genre, :website, :photo
  has_many :reviews
end
