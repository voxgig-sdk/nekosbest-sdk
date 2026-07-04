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
  category?: number
  endpoint?: any[]
  total_gif?: number
  total_image?: number
}

export type ImageLoadMatch = Partial<Image>

export type ImageListMatch = Partial<Image>

export interface Search {
  anime_name?: string
  artist_href?: string
  artist_name?: string
  source_url?: string
  url: string
}

export type SearchListMatch = Partial<Search>

