export interface Image {
    format?: string;
}
export interface ImageLoadMatch {
    format?: string;
}
export interface RandomByCategory {
    anime_name?: string;
    artist_href?: string;
    artist_name?: string;
    source_url?: string;
    url: string;
}
export interface RandomByCategoryListMatch {
    category: string;
    amount?: number;
}
export interface Search {
    anime_name?: string;
    artist_href?: string;
    artist_name?: string;
    source_url?: string;
    url: string;
}
export interface SearchListMatch {
    amount?: number;
    category?: string;
    query: string;
    type: number;
}
