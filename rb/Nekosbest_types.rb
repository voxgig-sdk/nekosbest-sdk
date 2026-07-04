# frozen_string_literal: true

# Typed models for the Nekosbest SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetRandomByCategory entity data model.
#
# @!attribute [rw] anime_name
#   @return [String, nil]
#
# @!attribute [rw] artist_href
#   @return [String, nil]
#
# @!attribute [rw] artist_name
#   @return [String, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String]
GetRandomByCategory = Struct.new(
  :anime_name,
  :artist_href,
  :artist_name,
  :source_url,
  :url,
  keyword_init: true
)

# Request payload for GetRandomByCategory#list.
#
# @!attribute [rw] id
#   @return [String]
GetRandomByCategoryListMatch = Struct.new(
  :id,
  keyword_init: true
)

# Image entity data model.
#
# @!attribute [rw] category
#   @return [Integer, nil]
#
# @!attribute [rw] endpoint
#   @return [Array, nil]
#
# @!attribute [rw] total_gif
#   @return [Integer, nil]
#
# @!attribute [rw] total_image
#   @return [Integer, nil]
Image = Struct.new(
  :category,
  :endpoint,
  :total_gif,
  :total_image,
  keyword_init: true
)

# Match filter for Image#load (any subset of Image fields).
#
# @!attribute [rw] category
#   @return [Integer, nil]
#
# @!attribute [rw] endpoint
#   @return [Array, nil]
#
# @!attribute [rw] total_gif
#   @return [Integer, nil]
#
# @!attribute [rw] total_image
#   @return [Integer, nil]
ImageLoadMatch = Struct.new(
  :category,
  :endpoint,
  :total_gif,
  :total_image,
  keyword_init: true
)

# Match filter for Image#list (any subset of Image fields).
#
# @!attribute [rw] category
#   @return [Integer, nil]
#
# @!attribute [rw] endpoint
#   @return [Array, nil]
#
# @!attribute [rw] total_gif
#   @return [Integer, nil]
#
# @!attribute [rw] total_image
#   @return [Integer, nil]
ImageListMatch = Struct.new(
  :category,
  :endpoint,
  :total_gif,
  :total_image,
  keyword_init: true
)

# Search entity data model.
#
# @!attribute [rw] anime_name
#   @return [String, nil]
#
# @!attribute [rw] artist_href
#   @return [String, nil]
#
# @!attribute [rw] artist_name
#   @return [String, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String]
Search = Struct.new(
  :anime_name,
  :artist_href,
  :artist_name,
  :source_url,
  :url,
  keyword_init: true
)

# Match filter for Search#list (any subset of Search fields).
#
# @!attribute [rw] anime_name
#   @return [String, nil]
#
# @!attribute [rw] artist_href
#   @return [String, nil]
#
# @!attribute [rw] artist_name
#   @return [String, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
SearchListMatch = Struct.new(
  :anime_name,
  :artist_href,
  :artist_name,
  :source_url,
  :url,
  keyword_init: true
)

