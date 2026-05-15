# Nekosbest SDK utility: make_context
require_relative '../core/context'
module NekosbestUtilities
  MakeContext = ->(ctxmap, basectx) {
    NekosbestContext.new(ctxmap, basectx)
  }
end
