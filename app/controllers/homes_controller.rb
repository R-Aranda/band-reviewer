class HomesController < ApplicationController
  before_action :authorize_user, only: [:auth, :authenticated]

  def index
  end

  def auth
    render :index
  end

  private 

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      redirect_to "/users/sign_in"
    end
  end


end
