// Typed models for the Nekosbest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface GetRandomByCategory {
  anime_name?: string
  artist_href?: string
  artist_name?: string
  source_url?: string
  url: string
}

export interface GetRandomByCategoryListMatch {
  id: string
}

export interface Image {
  categories?: number
  endpoints?: any[]
  total_gifs?: number
  total_images?: number
}

export interface ImageLoadMatch {
  categories?: number
  endpoints?: any[]
  total_gifs?: number
  total_images?: number
}

export interface ImageListMatch {
  categories?: number
  endpoints?: any[]
  total_gifs?: number
  total_images?: number
}

export interface Search {
  anime_name?: string
  artist_href?: string
  artist_name?: string
  source_url?: string
  url: string
}

export interface SearchListMatch {
  anime_name?: string
  artist_href?: string
  artist_name?: string
  source_url?: string
  url?: string
}

