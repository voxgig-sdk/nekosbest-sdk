# Typed models for the Nekosbest SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
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


class Image(TypedDict, total=False):
    format: str


class ImageLoadMatch(TypedDict, total=False):
    format: str


class RandomByCategoryRequired(TypedDict):
    url: str


class RandomByCategory(RandomByCategoryRequired, total=False):
    anime_name: str
    artist_href: str
    artist_name: str
    source_url: str


class RandomByCategoryListMatchRequired(TypedDict):
    category: str


class RandomByCategoryListMatch(RandomByCategoryListMatchRequired, total=False):
    amount: int


class SearchRequired(TypedDict):
    url: str


class Search(SearchRequired, total=False):
    anime_name: str
    artist_href: str
    artist_name: str
    source_url: str


class SearchListMatchRequired(TypedDict):
    query: str
    type: int


class SearchListMatch(SearchListMatchRequired, total=False):
    amount: int
    category: str
