class VoteSerializer < ActiveModel::Serializer
attributes :id, :upvote, :downvote, :review_id, :user_id

belongs_to :user
belongs_to :review
end