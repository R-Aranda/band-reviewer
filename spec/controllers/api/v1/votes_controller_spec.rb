require "rails_helper"
RSpec.describe Api::V1::VotesController, type: :controller do
  include Devise::Test::ControllerHelpers

  before(:each) do
    user1 = FactoryBot.create(:user)
    sign_in user1
    
    artist1 = FactoryBot.create(:artist)

    review1 = FactoryBot.create(:review)
  end
   

  let!(:first_vote) {
    Vote.create(
      upvote: 1,
      downvote: 0,
      review_id: Review.first.id,
      user_id: User.first.id,
    )
  }

  describe "POST#create" do
    it "creates a new vote for a review" do
      user2 = FactoryBot.create(:user)
      
      sign_in user2
      count = Review.first.votes[0].upvote
      Vote.create(upvote: 1, downvote: 0, review_id: Review.first.id, user_id: User.last.id)
      expect(Review.first.votes.sum(:upvote)).to eq(count + 1)
    end
  end
end
