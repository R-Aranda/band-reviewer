class VoteSerializer < ActiveModel::Serializer
attributes :id, :upvotes, :downvotes, :review_id, :artist_id

end