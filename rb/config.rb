# Nekosbest SDK configuration

module NekosbestConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Nekosbest",
        "slug" => "nekosbest",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://nekos.best/api/v2",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "get_random_by_category" => {},
          "image" => {},
          "search" => {},
        },
      },
      "entity" => {
        "get_random_by_category" => {
          "fields" => [
            {
              "name" => "anime_name",
              "title" => "Anime Name",
              "type" => "`$STRING`",
              "short" => "Name of the anime the character is from (if applicable)",
            },
            {
              "name" => "artist_href",
              "title" => "Artist Href",
              "type" => "`$STRING`",
              "short" => "URL to the artist's profile or website",
              "format" => "uri",
            },
            {
              "name" => "artist_name",
              "title" => "Artist Name",
              "type" => "`$STRING`",
              "short" => "Name of the artist who created the image",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "source_url",
              "title" => "Source Url",
              "type" => "`$STRING`",
              "short" => "Original source URL of the image",
              "format" => "uri",
            },
            {
              "name" => "url",
              "title" => "Url",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Direct URL to the image or GIF hosted on nekos.best",
              "format" => "uri",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "get_random_by_category",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/{category}",
                  "segments" => [
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "category" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.results`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "category",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "neko",
                      },
                    ],
                    "query" => [
                      {
                        "name" => "amount",
                        "orig" => "amount",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "amount",
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "image" => {
          "fields" => [
            {
              "name" => "categories",
              "title" => "Categories",
              "type" => "`$INTEGER`",
              "short" => "Total number of categories",
            },
            {
              "name" => "endpoints",
              "title" => "Endpoints",
              "type" => "`$ARRAY`",
              "short" => "Array of available category names",
            },
            {
              "name" => "total_gifs",
              "title" => "Total Gifs",
              "type" => "`$INTEGER`",
              "short" => "Total number of GIFs available",
            },
            {
              "name" => "total_images",
              "title" => "Total Images",
              "type" => "`$INTEGER`",
              "short" => "Total number of images available",
            },
          ],
          "name" => "image",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/endpoints",
                  "segments" => [
                    {
                      "lit" => "endpoints",
                    },
                  ],
                  "parts" => [
                    "endpoints",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.endpoints`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/stats",
                  "segments" => [
                    {
                      "lit" => "stats",
                    },
                  ],
                  "parts" => [
                    "stats",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "search" => {
          "fields" => [
            {
              "name" => "anime_name",
              "title" => "Anime Name",
              "type" => "`$STRING`",
              "short" => "Name of the anime the character is from (if applicable)",
            },
            {
              "name" => "artist_href",
              "title" => "Artist Href",
              "type" => "`$STRING`",
              "short" => "URL to the artist's profile or website",
              "format" => "uri",
            },
            {
              "name" => "artist_name",
              "title" => "Artist Name",
              "type" => "`$STRING`",
              "short" => "Name of the artist who created the image",
            },
            {
              "name" => "source_url",
              "title" => "Source Url",
              "type" => "`$STRING`",
              "short" => "Original source URL of the image",
              "format" => "uri",
            },
            {
              "name" => "url",
              "title" => "Url",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Direct URL to the image or GIF hosted on nekos.best",
              "format" => "uri",
            },
          ],
          "name" => "search",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/search",
                  "segments" => [
                    {
                      "lit" => "search",
                    },
                  ],
                  "parts" => [
                    "search",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.results`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "amount",
                        "orig" => "amount",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 10,
                      },
                      {
                        "name" => "category",
                        "orig" => "category",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "query",
                        "orig" => "query",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "amount",
                      "category",
                      "query",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    NekosbestFeatures.make_feature(name)
  end
end
