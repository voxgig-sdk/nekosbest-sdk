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
# @!attribute [rw] categories
#   @return [Integer, nil]
#
# @!attribute [rw] endpoints
#   @return [Array, nil]
#
# @!attribute [rw] total_gifs
#   @return [Integer, nil]
#
# @!attribute [rw] total_images
#   @return [Integer, nil]
Image = Struct.new(
  :categories,
  :endpoints,
  :total_gifs,
  :total_images,
  keyword_init: true
)

# Request payload for Image#load.
#
# @!attribute [rw] categories
#   @return [Integer, nil]
#
# @!attribute [rw] endpoints
#   @return [Array, nil]
#
# @!attribute [rw] total_gifs
#   @return [Integer, nil]
#
# @!attribute [rw] total_images
#   @return [Integer, nil]
ImageLoadMatch = Struct.new(
  :categories,
  :endpoints,
  :total_gifs,
  :total_images,
  keyword_init: true
)

# Request payload for Image#list.
#
# @!attribute [rw] categories
#   @return [Integer, nil]
#
# @!attribute [rw] endpoints
#   @return [Array, nil]
#
# @!attribute [rw] total_gifs
#   @return [Integer, nil]
#
# @!attribute [rw] total_images
#   @return [Integer, nil]
ImageListMatch = Struct.new(
  :categories,
  :endpoints,
  :total_gifs,
  :total_images,
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

# Request payload for Search#list.
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

