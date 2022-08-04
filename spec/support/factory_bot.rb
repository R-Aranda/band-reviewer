require 'factory_bot'

FactoryBot.define do
  num = rand()
  factory :user do
    sequence(:email) {|n| "user#{n}@#{num}.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end
end
