require 'test_helper'

class DankookControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get gallery" do
    get :gallery
    assert_response :success
  end

  test "should get history" do
    get :history
    assert_response :success
  end

  test "should get rubytip" do
    get :rubytip
    assert_response :success
  end

  test "should get review" do
    get :review
    assert_response :success
  end

  test "should get wemade" do
    get :wemade
    assert_response :success
  end

  test "should get curriculum" do
    get :curriculum
    assert_response :success
  end

end
