require "rails_helper"

RSpec.describe Api::V1::ArtistsController, type: :controller do

  let!(:first_artist) {
    Artist.create(
      name: "The Strokes",
      bio: "Rich kids from New York got bored and started a band."
    )}

  let!(:second_artist) {
    Artist.create(
      name: "AJR",
      bio: "The worst band...possibly ever! -Aidan"
    ) }

  let!(:third_artist) {
    Artist.create(
      name: "The Luke Band",
      bio: "Pretty Sick."
    ) }

  let!(:first_review) {
    Review.create(
      title: "This band is cool",
      body: "Hey this band is like really cool",
      artist: Artist.first
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
    it "creates a new artist" do
      
      post_json = { name: third_artist.name, bio: third_artist.bio }
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

    it "creates a new review for an artist" do

      post_json = { title: first_review.title, body: first_review.body, artist: first_artist}
      count = Review.count
      post(:create, params: {review: post_json, artist: first_artist})
      expect(Review.count).to eq(count + 1)
    end

    it "returns json of new review" do 

      post_json = { title: first_review.title, body: first_review.body, artist: first_artist}
      post(:create, params: {review: post_json, artist: first_artist})
      returned_json = JSON.parse(response.body)
      
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["review"]["title"]).to eq first_review.title
      expect(returned_json["review"]["body"]).to eq first_review.body

    end

  end
end
