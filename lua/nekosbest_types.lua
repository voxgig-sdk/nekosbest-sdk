-- Typed models for the Nekosbest SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class GetRandomByCategory
---@field anime_name? string
---@field artist_href? string
---@field artist_name? string
---@field source_url? string
---@field url string

---@class GetRandomByCategoryListMatch
---@field id string

---@class Image
---@field category? number
---@field endpoint? table
---@field total_gif? number
---@field total_image? number

---@class ImageLoadMatch

---@class ImageListMatch

---@class Search
---@field anime_name? string
---@field artist_href? string
---@field artist_name? string
---@field source_url? string
---@field url string

---@class SearchListMatch

local M = {}

return M
