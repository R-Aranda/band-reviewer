require "rails_helper"
RSpec.describe Api::V1::VotesController, type: :controller do
  include Devise::Test::ControllerHelpers

  # let!(:first_user) {
  #   User.create(
  #     email: "asdf@asdf.com",
  #     password: "111111",
  #   )
  # }

  user1 = FactoryBot.create(:user)
      sign_in user1

  let!(:first_artist) {
    Artist.create(
      name: "The Strokes",
      bio: "Rich kids from New York got bored and started a band."
    )
  }

  let!(:first_review) {
    Review.create(
      rating: "⭐️⭐️⭐️",
      title: "This band is cool",
      body: "Hey this band is like really cool",
      artist_id: first_artist.id,
      user_id: user1
    )
  }

  let!(:first_vote) {
    Vote.create(
      upvote: 1,
      downvote: 0,
      review_id: first_review.id,
      user_id: first_user.id,
    )
  }

  describe "POST#create" do
    it "creates a new vote for a review" do

      post_json = {upvote: 1, downvote: 0, review_id: first_review.id, user_id: current_user }

      count = first_review.votes.count
      binding.pry
      post_json = {upvote: first_vote.upvote, downvote: first_vote.downvote, review_id: first_review.id, user_id: first_user.id }
      puts count
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
