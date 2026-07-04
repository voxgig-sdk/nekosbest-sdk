# Typed models for the Nekosbest SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class GetRandomByCategory:
    url: str
    anime_name: Optional[str] = None
    artist_href: Optional[str] = None
    artist_name: Optional[str] = None
    source_url: Optional[str] = None


@dataclass
class GetRandomByCategoryListMatch:
    id: str


@dataclass
class Image:
    category: Optional[int] = None
    endpoint: Optional[list] = None
    total_gif: Optional[int] = None
    total_image: Optional[int] = None


@dataclass
class ImageLoadMatch:
    category: Optional[int] = None
    endpoint: Optional[list] = None
    total_gif: Optional[int] = None
    total_image: Optional[int] = None


@dataclass
class ImageListMatch:
    category: Optional[int] = None
    endpoint: Optional[list] = None
    total_gif: Optional[int] = None
    total_image: Optional[int] = None


@dataclass
class Search:
    url: str
    anime_name: Optional[str] = None
    artist_href: Optional[str] = None
    artist_name: Optional[str] = None
    source_url: Optional[str] = None


@dataclass
class SearchListMatch:
    anime_name: Optional[str] = None
    artist_href: Optional[str] = None
    artist_name: Optional[str] = None
    source_url: Optional[str] = None
    url: Optional[str] = None

