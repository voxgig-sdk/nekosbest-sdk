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
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "title": "Anime Name",
            "type": "`$STRING`",
            "short": "Name of the anime the character is from (if applicable)",
          },
          {
            "name": "artist_href",
            "title": "Artist Href",
            "type": "`$STRING`",
            "short": "URL to the artist's profile or website",
            "format": "uri",
          },
          {
            "name": "artist_name",
            "title": "Artist Name",
            "type": "`$STRING`",
            "short": "Name of the artist who created the image",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "source_url",
            "title": "Source Url",
            "type": "`$STRING`",
            "short": "Original source URL of the image",
            "format": "uri",
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "req": True,
            "short": "Direct URL to the image or GIF hosted on nekos.best",
            "format": "uri",
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
                "kind": "http",
                "method": "GET",
                "orig": "/{category}",
                "segments": [
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "category": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "category",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "neko",
                    },
                  ],
                  "query": [
                    {
                      "name": "amount",
                      "orig": "amount",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "amount",
                    "id",
                  ],
                },
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
            "title": "Categories",
            "type": "`$INTEGER`",
            "short": "Total number of categories",
          },
          {
            "name": "endpoints",
            "title": "Endpoints",
            "type": "`$ARRAY`",
            "short": "Array of available category names",
          },
          {
            "name": "total_gifs",
            "title": "Total Gifs",
            "type": "`$INTEGER`",
            "short": "Total number of GIFs available",
          },
          {
            "name": "total_images",
            "title": "Total Images",
            "type": "`$INTEGER`",
            "short": "Total number of images available",
          },
        ],
        "name": "image",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/endpoints",
                "segments": [
                  {
                    "lit": "endpoints",
                  },
                ],
                "parts": [
                  "endpoints",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.endpoints`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/stats",
                "segments": [
                  {
                    "lit": "stats",
                  },
                ],
                "parts": [
                  "stats",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
            "title": "Anime Name",
            "type": "`$STRING`",
            "short": "Name of the anime the character is from (if applicable)",
          },
          {
            "name": "artist_href",
            "title": "Artist Href",
            "type": "`$STRING`",
            "short": "URL to the artist's profile or website",
            "format": "uri",
          },
          {
            "name": "artist_name",
            "title": "Artist Name",
            "type": "`$STRING`",
            "short": "Name of the artist who created the image",
          },
          {
            "name": "source_url",
            "title": "Source Url",
            "type": "`$STRING`",
            "short": "Original source URL of the image",
            "format": "uri",
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "req": True,
            "short": "Direct URL to the image or GIF hosted on nekos.best",
            "format": "uri",
          },
        ],
        "name": "search",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/search",
                "segments": [
                  {
                    "lit": "search",
                  },
                ],
                "parts": [
                  "search",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "args": {
                  "query": [
                    {
                      "name": "amount",
                      "orig": "amount",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "category",
                      "orig": "category",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "query",
                      "orig": "query",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "amount",
                    "category",
                    "query",
                  ],
                },
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
