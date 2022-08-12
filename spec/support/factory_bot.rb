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

FactoryBot.define do
  factory :artist do
    name {"Band"}
    bio {"a bio"}
  end
end

FactoryBot.define do
  factory :review do
      rating {"⭐️⭐️⭐️"}
      title {"test title"}
      body {"test body"}
      artist_id { Artist.first.id }
      user_id { User.first.id }
  end
end
