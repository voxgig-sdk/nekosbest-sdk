# Nekosbest SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Nekosbest",
            "slug": "nekosbest",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://nekos.best/api/v2",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "get_random_by_category": {},
                "image": {},
                "search": {},
            },
        },
        "entity": {
      "get_random_by_category": {
        "fields": [
          {
            "name": "anime_name",
            "short": "Name of the anime the character is from (if applicable)",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "artist_href",
            "short": "URL to the artist's profile or website",
            "type": "`$STRING`",
          },
          {
            "name": "artist_name",
            "short": "Name of the artist who created the image",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "source_url",
            "short": "Original source URL of the image",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "url",
            "req": True,
            "short": "Direct URL to the image or GIF hosted on nekos.best",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "get_random_by_category",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": "neko",
                      "kind": "param",
                      "name": "id",
                      "orig": "category",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "amount",
                      "orig": "amount",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{category}",
                "rename": {
                  "param": {
                    "category": "id",
                  },
                },
                "segments": [
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "amount",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "parts": [
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "image": {
        "fields": [
          {
            "name": "categories",
            "short": "Total number of categories",
            "type": "`$INTEGER`",
          },
          {
            "name": "endpoints",
            "short": "Array of available category names",
            "type": "`$ARRAY`",
          },
          {
            "name": "total_gifs",
            "short": "Total number of GIFs available",
            "type": "`$INTEGER`",
          },
          {
            "name": "total_images",
            "short": "Total number of images available",
            "type": "`$INTEGER`",
          },
        ],
        "name": "image",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/endpoints",
                "segments": [
                  {
                    "lit": "endpoints",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.endpoints`",
                },
                "parts": [
                  "endpoints",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/stats",
                "segments": [
                  {
                    "lit": "stats",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "stats",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "search": {
        "fields": [
          {
            "name": "anime_name",
            "short": "Name of the anime the character is from (if applicable)",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "artist_href",
            "short": "URL to the artist's profile or website",
            "type": "`$STRING`",
          },
          {
            "name": "artist_name",
            "short": "Name of the artist who created the image",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "source_url",
            "short": "Original source URL of the image",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "url",
            "req": True,
            "short": "Direct URL to the image or GIF hosted on nekos.best",
            "type": "`$STRING`",
          },
        ],
        "name": "search",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "amount",
                      "orig": "amount",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "category",
                      "orig": "category",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/search",
                "segments": [
                  {
                    "lit": "search",
                  },
                ],
                "select": {
                  "exist": [
                    "amount",
                    "category",
                    "query",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "parts": [
                  "search",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
