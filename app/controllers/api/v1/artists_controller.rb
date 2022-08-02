class Api::V1::ArtistsController < ApiController

  def index 
    artists = Artist.all
    render json: artists
  end

  def create
    artist = Artist.new(artist_params)
    if artist.save
      render json: artist
    else
      render json: { errors: artist.errors.full_messages }, status: 400
    end
  end

  # find out why it isnt saving 
  # use React Router Redirect on the frontend

  private

  def artist_params
    params.require(:artist).permit(:name, :bio)
  end
end