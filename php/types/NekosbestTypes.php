<?php
declare(strict_types=1);

// Typed models for the Nekosbest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Image entity data model. */
class Image
{
    public ?string $format = null;
}

/** Request payload for Image#load. */
class ImageLoadMatch
{
    public ?string $format = null;
}

/** RandomByCategory entity data model. */
class RandomByCategory
{
    public ?string $anime_name = null;
    public ?string $artist_href = null;
    public ?string $artist_name = null;
    public ?string $source_url = null;
    public string $url;
}

/** Request payload for RandomByCategory#list. */
class RandomByCategoryListMatch
{
    public string $category;
    public ?int $amount = null;
}

/** Search entity data model. */
class Search
{
    public ?string $anime_name = null;
    public ?string $artist_href = null;
    public ?string $artist_name = null;
    public ?string $source_url = null;
    public string $url;
}

/** Request payload for Search#list. */
class SearchListMatch
{
    public ?int $amount = null;
    public ?string $category = null;
    public string $query;
    public int $type;
}

