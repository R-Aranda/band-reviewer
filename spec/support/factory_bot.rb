require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@email.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end
end
