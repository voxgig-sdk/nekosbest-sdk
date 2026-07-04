<?php
declare(strict_types=1);

// Typed models for the Nekosbest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** GetRandomByCategory entity data model. */
class GetRandomByCategory
{
    public ?string $anime_name = null;
    public ?string $artist_href = null;
    public ?string $artist_name = null;
    public ?string $source_url = null;
    public string $url;
}

/** Request payload for GetRandomByCategory#list. */
class GetRandomByCategoryListMatch
{
    public string $id;
}

/** Image entity data model. */
class Image
{
    public ?int $category = null;
    public ?array $endpoint = null;
    public ?int $total_gif = null;
    public ?int $total_image = null;
}

/** Match filter for Image#load (any subset of Image fields). */
class ImageLoadMatch
{
    public ?int $category = null;
    public ?array $endpoint = null;
    public ?int $total_gif = null;
    public ?int $total_image = null;
}

/** Match filter for Image#list (any subset of Image fields). */
class ImageListMatch
{
    public ?int $category = null;
    public ?array $endpoint = null;
    public ?int $total_gif = null;
    public ?int $total_image = null;
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

/** Match filter for Search#list (any subset of Search fields). */
class SearchListMatch
{
    public ?string $anime_name = null;
    public ?string $artist_href = null;
    public ?string $artist_name = null;
    public ?string $source_url = null;
    public ?string $url = null;
}

