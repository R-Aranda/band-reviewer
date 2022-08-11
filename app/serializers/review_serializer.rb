class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :title, :body, :created_at, :artist_id, :votes, :current_user_vote_status, :vote_stats

  has_many :votes

  def vote_stats
    reviews = Review.where(artist_id: self.object.id)
    

    # reviews.map do |review|
    #   totalUpvotes = 0
    #   if !review.votes.empty?
    #     totalUpvotes = review.votes.upvotes.count
    #   end
      
    #   totalDownvotes = 0
    #   if !review.votes.empty?
    #     totalDownvotes = review.votes.downvotes.count
    #   end
  end

  def current_user_vote_status 
    # this should say whether the current user has agreed, disagreed or not voted
  end 
end
