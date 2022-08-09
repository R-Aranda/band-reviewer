class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

<<<<<<< HEAD
  mount_uploader :profile_photo, ProfilePhotoUploader

=======
  
  has_many :reviews
>>>>>>> user_page
  def admin?
    role == "admin"
  end
end
