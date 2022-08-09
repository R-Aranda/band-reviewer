require "rails_helper"
RSpec.describe Api::V1::UsersController, type: :controller do
  
  describe "GET#show" do 
    it "should show user page" do
      user = FactoryBot.create(:user)

      get :show, params: {id: user.id}
      return_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(return_json["user"]["email"]).to eq user.email
      expect(return_json["user"]["username"]).to eq user.username
    end
  end
end