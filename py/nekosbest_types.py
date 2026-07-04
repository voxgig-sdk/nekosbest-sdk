# Typed models for the Nekosbest SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class GetRandomByCategoryRequired(TypedDict):
    url: str


class GetRandomByCategory(GetRandomByCategoryRequired, total=False):
    anime_name: str
    artist_href: str
    artist_name: str
    source_url: str


class GetRandomByCategoryListMatch(TypedDict):
    id: str


class Image(TypedDict, total=False):
    category: int
    endpoint: list
    total_gif: int
    total_image: int


class ImageLoadMatch(TypedDict, total=False):
    category: int
    endpoint: list
    total_gif: int
    total_image: int


class ImageListMatch(TypedDict, total=False):
    category: int
    endpoint: list
    total_gif: int
    total_image: int


class SearchRequired(TypedDict):
    url: str


class Search(SearchRequired, total=False):
    anime_name: str
    artist_href: str
    artist_name: str
    source_url: str


class SearchListMatch(TypedDict, total=False):
    anime_name: str
    artist_href: str
    artist_name: str
    source_url: str
    url: str
