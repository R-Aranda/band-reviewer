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
    )}

  describe "GET#index" do
    it "should return a list of all artists" do
      get :index, params: {id: first_artist.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json[0]["name"]).to  eq first_artist.name
      expect(returned_json[0]["bio"]).to  eq first_artist.bio
      expect(returned_json[1]["name"]).to  eq second_artist.name
      expect(returned_json[1]["bio"]).to  eq second_artist.bio
    end
  end 

  describe "GET#show" do
    it "should be an artist's show page with details about the artist name and bio" do
      get :show, params: {id: first_artist.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json["name"]).to  eq first_artist.name
      expect(returned_json["bio"]).to  eq first_artist.bio
    end
  end
end
