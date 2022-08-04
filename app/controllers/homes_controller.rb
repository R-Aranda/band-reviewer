class HomesController < ApplicationController
  before_action :authorize_user_nick, only: [:auth]

  def index
  end

  def auth
    render :index
  end
  #any page that needs to have an authorized user send them to the "auth" page
  private 


  def authorize_user_nick
    if !user_signed_in?
      redirect_to "/users/sign_in"
    end
  end


end
