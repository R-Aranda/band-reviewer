class Api::V1::ArtistsController < ApiController
  before_action :authenticate_user_fetch!, except: [:index, :show]

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

  def show
    artist = Artist.find(params[:id])
    render json: artist
  end
  
  private

  def artist_params
    params.require(:artist).permit(:name, :bio)
  end

  def authenticate_user_fetch!
    if !user_signed_in?
      render json: { error: "you must be signed in to create a new band"}, status: 401
    end
  end
end