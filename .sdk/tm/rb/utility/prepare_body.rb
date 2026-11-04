# Nekosbest SDK utility: prepare_body
require_relative 'media'
module NekosbestUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return NekosbestUtilities.raw_body(ctx.reqdata) if NekosbestUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
