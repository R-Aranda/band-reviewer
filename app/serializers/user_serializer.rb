class UserSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :username, :email, :profile_photo
end