require 'test_helper'

class PageControllerTest < ActionDispatch::IntegrationTest
  test "should get map" do
    get page_map_url
    assert_response :success
  end

end
