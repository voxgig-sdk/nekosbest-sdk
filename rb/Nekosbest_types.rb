# frozen_string_literal: true

# Typed models for the Nekosbest SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Image entity data model.
#
# @!attribute [rw] format
#   @return [String, nil]
Image = Struct.new(
  :format,
  keyword_init: true
)

# Request payload for Image#load.
#
# @!attribute [rw] format
#   @return [String, nil]
ImageLoadMatch = Struct.new(
  :format,
  keyword_init: true
)

# RandomByCategory entity data model.
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
RandomByCategory = Struct.new(
  :anime_name,
  :artist_href,
  :artist_name,
  :source_url,
  :url,
  keyword_init: true
)

# Request payload for RandomByCategory#list.
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] amount
#   @return [Integer, nil]
RandomByCategoryListMatch = Struct.new(
  :category,
  :amount,
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
# @!attribute [rw] amount
#   @return [Integer, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] query
#   @return [String]
#
# @!attribute [rw] type
#   @return [Integer]
SearchListMatch = Struct.new(
  :amount,
  :category,
  :query,
  :type,
  keyword_init: true
)

