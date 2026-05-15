# Nekosbest SDK exists test

require "minitest/autorun"
require_relative "../Nekosbest_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = NekosbestSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
