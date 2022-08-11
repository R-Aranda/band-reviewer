class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :genre, :website, :artist_data

  has_many :reviews
  
  def artist_data
    client = MusicBrainzClient.new 
    MusicBrainzClient.request_artist_data(object.name)
    return MusicBrainzClient.parse_data
  end
end
