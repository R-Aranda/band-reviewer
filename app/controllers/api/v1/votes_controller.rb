class Api::V1::VotesController < ApplicationController
    before_action :authenticate_user_fetch!, except: [:index, :show]
    before_action :authorize_user, only: [:delete]

    def create
      vote = Vote.new( review_params )

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
        params.require(:vote).permit(:upvotes, :downvotes, :review_id)
      end

      def authorize_user
        if !user_signed_in? || !(current_user.role == "admin")
          render json: {error: ["Only admins have access to this feature"]}
        end
      end
    
      def authenticate_user_fetch!
        if !user_signed_in?
          render json: { error: "you must be signed in to vote on a review"}, status: 401
        end
      end
    
  end