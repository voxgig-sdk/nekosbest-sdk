# Nekosbest SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module NekosbestFeatures
  def self.make_feature(name)
    case name
    when "base"
      NekosbestBaseFeature.new
    when "test"
      NekosbestTestFeature.new
    else
      NekosbestBaseFeature.new
    end
  end
end
