class Api::V1::ArtistsController < ApiController

  def index 
    artists = Artist.all
    render json: artists
  end

end