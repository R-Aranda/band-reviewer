class Api::V1::ArtistsController < ApiController

  def index 
    render json: Artist.all
  end

  def create
    artist = Artist.new(artist_params)
    if artist.save
      render json: artist
    else
      render json: { errors: artist.errors.full_messages }, status: 400
    end
  end

  def show
    artist = Artist.find(params[:id])
    render json: artist
  end

  private
  
  def artist_params
    params.require(:artist).permit(:name, :bio)
  end
end