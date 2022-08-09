class Api::V1::ReviewsController < ApiController
  before_action :authenticate_user_fetch!, except: [:index, :show]
  before_action :authorize_user, only: [:delete]

  def create
    review = Review.new(review_params)
    review.artist_id = artist.id
    if review.save
      render json: review
    else
      render json: { errors: review.errors.full_messages }, status: 400
    end
  end

  private

  def review_params 
    params.require(:review).permit(:rating, :title, :body)
  end

  def artist
    @artist = Artist.find(params[:artist_id])
  end

  def authorize_user
    if !user_signed_in? || !(current_user.role == "admin")
      render json: {error: ["Only admins have access to this feature"]}
    end
  end

  def authenticate_user_fetch!
    if !user_signed_in?
      render json: { error: "you must be signed in to submit a review"}, status: 401
    end
  end

end