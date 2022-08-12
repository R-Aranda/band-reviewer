class Api::V1::VotesController < ApplicationController
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user, except: [:index]

  def total_votes
    votes = Vote.where(review_id: params["review_id"])
    upvotes = votes.sum(:upvote)
    downvotes = votes.sum(:downvote)
    total = upvotes + downvotes * -1
    {total: total, upvotes: upvotes, downvotes: downvotes}
  end

  def create
    user_vote = Vote.find_by(user: current_user, review_id: params["review_id"])
    if user_vote
      user_vote_logic
    else
      create_new_vote
    end
  end

  def index
    render json: total_votes
  end

  private 

  def user_vote_logic
    user_vote = Vote.find_by(user: current_user, review_id: params["review_id"])

    if user_vote.upvote === 1 && params["upvote"].to_i === 1
      user_vote.update(upvote: 0, downvote: 0)
    elsif user_vote.downvote === 1 && params["downvote"].to_i === 1
      user_vote.update(downvote: 0, upvote: 0)
    elsif user_vote.upvote === 1 && params["downvote"].to_i === 1
      user_vote.update(upvote: 0, downvote: 1)
    elsif user_vote.downvote === 1 && params["upvote"].to_i === 1
      user_vote.update(upvote: 1, downvote: 0)
    elsif user_vote.upvote === 0 && params["downvote"].to_i === 1
      user_vote.update(downvote: 1, upvote: 0)
    elsif user_vote.upvote === 0 && params["upvote"].to_i === 1
      user_vote.update(upvote: 1, downvote: 0)
    end
    render json: {user_vote: user_vote, total_votes: total_votes}
  end

  def create_new_vote
    vote = Vote.create(review_id: params["review_id"], upvote: params["upvote"], downvote: params["downvote"], user_id: current_user.id)
    render json: {vote: vote, total_votes: total_votes}
  end

  def review_params 
    params.require(:vote).permit(:upvote, :downvote, :review_id)
  end
  
  def authenticate_user
    if !user_signed_in?
      render json: { error: "you must be signed in to vote on a review"}, status: 401
    end
  end
end