# Nekosbest SDK configuration


def make_config():
    return {
        "main": {
            "name": "Nekosbest",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "artist_href",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "artist_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "source_url",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "url",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
        ],
        "name": "get_random_by_category",
        "op": {
          "list": {
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
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "amount",
                      "orig": "amount",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/{category}",
                "parts": [
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "category": "id",
                  },
                },
                "select": {
                  "exist": [
                    "amount",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "image": {
        "fields": [
          {
            "name": "category",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "endpoint",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "total_gif",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "total_image",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 3,
          },
        ],
        "name": "image",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/endpoints",
                "parts": [
                  "endpoints",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
            "name": "load",
            "points": [
              {
                "method": "GET",
                "orig": "/stats",
                "parts": [
                  "stats",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "artist_href",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "artist_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "source_url",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "url",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
        ],
        "name": "search",
        "op": {
          "list": {
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
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "category",
                      "orig": "category",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/search",
                "parts": [
                  "search",
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
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
