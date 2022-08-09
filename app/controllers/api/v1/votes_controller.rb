class Api::V1::VotesController < ApplicationController
    protect_from_forgery with: :null_session
    skip_before_action :verify_authenticity_token


    before_action :authenticate_user
    def create
      binding.pry
      vote = Vote.create( review_params )

      former_vote = Vote.find_by(user: current_user, review_id: params["review_id"])

      if former_vote
        former_vote.upvotes = params["upvotes"]
        former_vote.downvotes = params["downvotes"]
        former_vote.save
      else
        vote.save
      end
    end

    private 

    def review_params 
        params.require(:vote).permit(:upvotes, :downvotes, :review_id, current_user)
      end
    
      def authenticate_user
        if !user_signed_in?
          render json: { error: "you must be signed in to vote on a review"}, status: 401
        end
      end
    
  end