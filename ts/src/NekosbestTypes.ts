// Typed models for the Nekosbest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Image {
  format?: string
}

export interface ImageLoadMatch {
  format?: string
}

export interface RandomByCategory {
  anime_name?: string
  artist_href?: string
  artist_name?: string
  source_url?: string
  url: string
}

export interface RandomByCategoryListMatch {
  category: string
  amount?: number
}

export interface Search {
  anime_name?: string
  artist_href?: string
  artist_name?: string
  source_url?: string
  url: string
}

export interface SearchListMatch {
  amount?: number
  category?: string
  query: string
  type: number
}

