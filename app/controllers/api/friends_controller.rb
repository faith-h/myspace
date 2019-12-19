class Api::FriendsController < ApplicationController

  def index
    render json: User.random_friends(current_user.liked_friends)
  end

  def update
    current_user.liked_friends << params[:id].to_i
    current_user.save
  end

  def my_friends
    render json: User.liked(current_user.liked_friends)
  end

end
