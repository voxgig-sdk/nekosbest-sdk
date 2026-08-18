
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'Nekosbest',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://nekos.best/api/v2",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      get_random_by_category: {
      },

      image: {
      },

      search: {
      },

    }
  }


  entity = {
    "get_random_by_category": {
      "fields": [
        {
          "name": "anime_name",
          "type": "`$STRING`"
        },
        {
          "name": "artist_href",
          "type": "`$STRING`"
        },
        {
          "name": "artist_name",
          "type": "`$STRING`"
        },
        {
          "name": "source_url",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "req": true,
          "type": "`$STRING`"
        }
      ],
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "amount",
                    "orig": "amount",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/{category}",
              "parts": [
                "{id}"
              ],
              "rename": {
                "param": {
                  "category": "id"
                }
              },
              "select": {
                "exist": [
                  "amount",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "image": {
      "fields": [
        {
          "name": "categories",
          "type": "`$INTEGER`"
        },
        {
          "name": "endpoints",
          "type": "`$ARRAY`"
        },
        {
          "name": "total_gifs",
          "type": "`$INTEGER`"
        },
        {
          "name": "total_images",
          "type": "`$INTEGER`"
        }
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
              "parts": [
                "endpoints"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.endpoints`"
              }
            }
          ]
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
              "parts": [
                "stats"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "search": {
      "fields": [
        {
          "name": "anime_name",
          "type": "`$STRING`"
        },
        {
          "name": "artist_href",
          "type": "`$STRING`"
        },
        {
          "name": "artist_name",
          "type": "`$STRING`"
        },
        {
          "name": "source_url",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "req": true,
          "type": "`$STRING`"
        }
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
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "category",
                    "orig": "category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "query",
                    "orig": "query",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/search",
              "parts": [
                "search"
              ],
              "select": {
                "exist": [
                  "amount",
                  "category",
                  "query"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

