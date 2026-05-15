# Nekosbest SDK utility: feature_add
module NekosbestUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
