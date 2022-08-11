require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@email.com" }
    password { 'password' }
    password_confirmation { 'password' }
    username { 'factoryboi' }
    profile_photo { fixture_file_upload( Rails.root + 'spec/fixtures/images/test-image.png', "image/png") }
  end
end
