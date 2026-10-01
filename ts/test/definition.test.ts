import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "get_random_by_category",
    "accessor": "GetRandomByCategory",
    "op": "list",
    "method": "GET",
    "path": "/{category}",
    "args": [
      {
        "name": "id",
        "wire": "category",
        "value": "neko"
      }
    ],
    "select": {
      "amount": "v1"
    },
    "headers": [],
    "query": [
      "amount"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "results": [
        {
          "artist_href": "https://www.pixiv.net/en/users/12345",
          "artist_name": "Artist Name",
          "source_url": "https://www.pixiv.net/en/artworks/67890",
          "url": "https://nekos.best/api/v2/neko/001.png",
          "anime_name": "Anime Title"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "image",
    "accessor": "Image",
    "op": "list",
    "method": "GET",
    "path": "/endpoints",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "endpoints": [
        "neko",
        "husbando",
        "kitsune"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "image",
    "accessor": "Image",
    "op": "load",
    "method": "GET",
    "path": "/stats",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "total_images": 5000,
      "total_gifs": 3000,
      "categories": 48
    },
    "idField": "id"
  },
  {
    "entity": "search",
    "accessor": "Search",
    "op": "list",
    "method": "GET",
    "path": "/search",
    "args": [],
    "select": {
      "amount": "v1",
      "category": "v1",
      "query": "v1"
    },
    "headers": [],
    "query": [
      "query",
      "category",
      "amount"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "results": [
        {
          "anime_name": "Anime Title",
          "artist_href": "https://www.pixiv.net/en/users/12345",
          "artist_name": "Artist Name",
          "source_url": "https://www.pixiv.net/en/artworks/67890",
          "url": "https://nekos.best/api/v2/neko/001.png"
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
