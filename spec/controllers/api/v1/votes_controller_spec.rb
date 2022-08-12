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
      post_json = {upvote: 1, downvote: 0, review_id: Review.first.id, user_id: User.last.id }
      post(:create, params: { use_route: 'api/v1/votes', vote: post_json } )
      

      binding.pry
      count = Review.last.votes.count
      
      # puts count
      # count = Review.count
      # post :create, params: { review: post_json, artist_id: first_artist.id }, format: :json
      # expect(Review.count).to eq(count + 1)
    end
  
    # it "returns json of new review" do 
    #   post_json = { rating: first_review.rating, title: first_review.title, body: first_review.body }
    #   post :create, params: { review: post_json, artist_id: first_artist.id }, format: :json
    #   returned_json = JSON.parse(response.body)
      
    #   expect(response.status).to eq 200
    #   expect(response.content_type).to eq("application/json")
    #   expect(returned_json).to be_kind_of(Hash)
    #   expect(returned_json).to_not be_kind_of(Array)
    #   expect(returned_json["review"]["rating"]).to eq first_review.rating
    #   expect(returned_json["review"]["title"]).to eq first_review.title
    #   expect(returned_json["review"]["body"]).to eq first_review.body
    # end
  end
end
