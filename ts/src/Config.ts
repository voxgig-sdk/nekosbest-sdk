
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://nekos.best/api/v2',

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
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "artist_href",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "artist_name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "source_url",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "url",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 4
        }
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
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ],
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "amount",
                    "orig": "amount",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  }
                ]
              },
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
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "image": {
      "fields": [
        {
          "name": "category",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 0
        },
        {
          "name": "endpoint",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 1
        },
        {
          "name": "total_gif",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 2
        },
        {
          "name": "total_image",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 3
        }
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
                "endpoints"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        },
        "load": {
          "name": "load",
          "points": [
            {
              "method": "GET",
              "orig": "/stats",
              "parts": [
                "stats"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
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
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "artist_href",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "artist_name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "source_url",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "url",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 4
        }
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
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "category",
                    "orig": "category",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "query",
                    "orig": "query",
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
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
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
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

