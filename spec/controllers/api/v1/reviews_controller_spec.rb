require "rails_helper"
RSpec.describe Api::V1::ReviewsController, type: :controller do

    before(:each) do
        user = FactoryBot.create(:user)
        sign_in user
      end
#HAD TO CREATE A USER IN ORDER TO ATTACH THE USER TO THE INITIAL REVIEW MADE IN THE let! BELOW
    let!(:first_artist) {
        Artist.create(
            name: "The Strokes",
            bio: "Rich kids from New York got bored and started a band."
        )
    }
#LOOK AT ARTISTS CONTROLLER FOR REFERENCE ON HOW WE NEED THE ARTIST TO COME BEFORE THE REVIEW AND THE REVIEW HAS TO HAVE AN ARTIST AND USER ATTACHED TO IT
    let!(:first_review) {
        Review.create(
          rating: "4",
          title: "This band is cool",
          body: "Hey this band is like really cool",
          artist: Artist.first,
          user: User.first
        ) 
      }
#HAD TO MOVE REVIEW BELOW ARTIST BECAUSE A REVIEW CANNOT EXIST WITHOUT A USER AND AN ARTIST

    describe "POST#create" do
#THIS NO LONGER WORKS BECAUSE A USER IS REQUIRED TO BE SIGNED IN FIRST TO MAKE A POST
        before(:each) do
            user2 = FactoryBot.create(:user)
            sign_in user2
            # binding.pry
          end
#HOW DO WE MAKE THIS POST WITHOUT A USER SO THAT THE USER CAN BE APPLIED IN THE ACTUAL POST ACTION SO THAT THE REVIEW COUNT INCREASES?
        it "creates a new review for an artist" do
            # binding.pry
            post_json = { rating: first_review.rating, title: first_review.title, body: first_review.body, artist: first_review.artist, user: current_user }
            count = Review.count
            post(:create, params: { review: post_json, artist_id: first_artist.id }, format: :json)
            # binding.pry
            expect(Review.count).to eq(count + 1)
        end
    
        it "returns json of new review" do 
            post_json = { rating: first_review.rating, title: first_review.title, body: first_review.body }
            post :create, params: { review: post_json, artist_id: first_artist.id }, format: :json
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
