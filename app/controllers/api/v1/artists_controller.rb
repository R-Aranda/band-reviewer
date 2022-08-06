class Api::V1::ArtistsController < ApiController
  before_action :authenticate_user_fetch!, except: [:index, :show]
  before_action :authorize_user, only: [:delete]

  def index 
    render json: { artists: Artist.all, user: current_user }
    #get current_user that is accessing page
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

  def destroy
    artist = Artist.find(params[:id])
    artist.destroy
    render json: {}, status: :no_content
  end

  private
  
  def artist_params
    params.require(:artist).permit(:name, :bio)
  end

  def authorize_user
    if !user_signed_in? || !(current_user.role == "admin")
      render json: {error: ["Only admins have access to this feature"]}
    end
  end

  def authenticate_user_fetch!
    if !user_signed_in?
      render json: { error: "you must be signed in to create a new band"}, status: 401
    end
  end
end