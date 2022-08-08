class Api::V1::ReviewsController < ApiController

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

end