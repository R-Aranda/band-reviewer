require "rails_helper"
RSpec.describe Api::V1::ReviewsController, type: :controller do

    before(:each) do
        user = FactoryBot.create(:user)
        sign_in user
        user2 = FactoryBot.create(:user)
        sign_in user2
      end
    let!(:first_artist) {
        Artist.create(
            name: "The Strokes",
            bio: "Rich kids from New York got bored and started a band."
        )
    }
    let!(:first_review) {
        Review.create(
          rating: "4",
          title: "This band is cool",
          body: "Hey this band is like really cool",
          artist: Artist.first,
          user: User.first
        ) 
      }

    describe "POST#create" do

        it "creates a new review for an artist" do

            user2 = FactoryBot.create(:user)
            sign_in user2
            
            post_json = { rating: first_review.rating, title: first_review.title, body: first_review.body }

            count = Review.count
            post(:create, params: { review: post_json, artist_id: first_artist.id }, format: :json)
            returned_json = JSON.parse(response.body)
            expect(Review.count).to eq(count + 1)
        end
    
        it "returns json of new review" do 
            post_json = { rating: first_review.rating, title: first_review.title, body: first_review.body }
            post :create, params: { review: post_json, artist_id: first_artist.id, user_id: user2.id }, format: :json
            returned_json = JSON.parse(response.body)
            
            expect(response.status).to eq 200
            expect(response.content_type).to eq("application/json")
            expect(returned_json).to be_kind_of(Hash)
            expect(returned_json).to_not be_kind_of(Array)
            expect(returned_json["review"]["rating"]).to eq first_review.rating
            expect(returned_json["review"]["title"]).to eq first_review.title
            expect(returned_json["review"]["body"]).to eq first_review.body
        end
    end

end
