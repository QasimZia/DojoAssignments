require 'test_helper'

class MainControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get main_index_url
    assert_response :success
  end

  test "should get proc" do
    get main_proc_url
    assert_response :success
  end

  test "should get result" do
    get main_result_url
    assert_response :success
  end

end
