-- Typed models for the Nekosbest SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Image
---@field format? string

---@class ImageLoadMatch
---@field format? string

---@class RandomByCategory
---@field anime_name? string
---@field artist_href? string
---@field artist_name? string
---@field source_url? string
---@field url string

---@class RandomByCategoryListMatch
---@field category string
---@field amount? number

---@class Search
---@field anime_name? string
---@field artist_href? string
---@field artist_name? string
---@field source_url? string
---@field url string

---@class SearchListMatch
---@field amount? number
---@field category? string
---@field query string
---@field type number

local M = {}

return M
