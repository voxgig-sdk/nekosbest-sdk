# Nekosbest SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module NekosbestFeatures
  def self.make_feature(name)
    case name
    when "base"
      NekosbestBaseFeature.new
    when "ratelimit"
      NekosbestRatelimitFeature.new
    when "retry"
      NekosbestRetryFeature.new
    when "test"
      NekosbestTestFeature.new
    when "timeout"
      NekosbestTimeoutFeature.new
    else
      NekosbestBaseFeature.new
    end
  end
end
