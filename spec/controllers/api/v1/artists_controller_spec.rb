require "rails_helper"

RSpec.describe Api::V1::ArtistsController, type: :controller do

  before(:each) do
    user = FactoryBot.create(:user)
    sign_in user
  end

  let!(:first_artist) {
    Artist.create(
      name: "The Strokes",
      bio: "Rich kids from New York got bored and started a band."
    ) 
  }

  let!(:second_artist) {
    Artist.create(
      name: "AJR",
      bio: "The worst band...possibly ever! -Aidan"
    ) 
  }

  let!(:third_artist) {
    Artist.create(
      name: "The Luke Band",
      bio: "Pretty Sick.",
    ) 
  }

  let!(:first_review) {
    Review.create(
      rating: "⭐️⭐️⭐️⭐️",
      title: "This band is cool",
      body: "Hey this band is like really cool",
      artist: Artist.first,
      user: User.first
    ) 
  }

  describe "GET#index" do

    it "should return a list of all artists" do
    
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json["artists"][0]["name"]).to  eq first_artist.name
      expect(returned_json["artists"][0]["bio"]).to  eq first_artist.bio
      expect(returned_json["artists"][1]["name"]).to  eq second_artist.name
      expect(returned_json["artists"][1]["bio"]).to  eq second_artist.bio
    end  
  end 

  describe "POST#create" do

    it "should create a new artist" do
      post_json = { name: third_artist.name, bio: third_artist.bio}
      count = Artist.count
      post(:create, params: {artist: post_json})

      expect(Artist.count).to eq(count + 1)
    end

    it "returns json of new artist" do

      post_json = { name: third_artist.name, bio: third_artist.bio }
      post(:create, params: {artist: post_json})
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["artist"]["name"]).to eq third_artist.name
      expect(returned_json["artist"]["bio"]).to eq third_artist.bio
    end
  end
  
  describe "POST#create" do

    before(:each) do
      user = FactoryBot.create(:user)
      sign_out user
    end

    it "should fail to create a new artist while not logged in" do

      post_json = { name: third_artist.name, bio: third_artist.bio}
      count = Artist.count
      post(:create, params: {artist: post_json})

      expect(Artist.count).to eq(count)
      expect(response).to have_http_status(401)
    end
  end

  describe "GET#show" do

    it "should be an artist's show page with details about the artist name and bio" do

      get :show, params: {id: first_artist.id, reviews: first_artist.reviews}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json["artist"]["name"]).to  eq first_artist.name
      expect(returned_json["artist"]["bio"]).to  eq first_artist.bio
      expect(returned_json["artist"]["reviews"][0]["title"]).to eq first_artist.reviews[0]["title"]
    end

    it "should show artist's information fetched from third party api" do
      get :show, params: {id: first_artist.id, reviews: first_artist.reviews}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq(200)
      expect(returned_json["artist"]["artist_data"]["name"]).to eq first_artist.name
      expect(returned_json["artist"]["artist_data"]["city"]).to eq "New York"
      expect(returned_json["artist"]["artist_data"]["year_started"]).to eq "1998"
    end
  end

  describe "DELETE#destroy" do

    before(:each) do
      user = FactoryBot.create(:user, role: 'admin')
      sign_in user
    end

    it "should delete Artist" do

      count = Artist.count
      delete :destroy, params: { id: first_artist.id }
      returned_json = JSON.parse(response.body)

      expect(returned_json.empty?).to eq (true)
      expect(Artist.count).to be((count) - 1)
    end
  end
end
