"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "image",
        "accessor": "Image",
        "op": "load",
        "method": "GET",
        "path": "/endpoints",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
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
        "entity": "random_by_category",
        "accessor": "RandomByCategory",
        "op": "list",
        "method": "GET",
        "path": "/{category}",
        "args": [
            {
                "name": "category",
                "wire": "category",
                "value": "neko"
            }
        ],
        "select": {
            "amount": 1
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "amount"
        ],
        "queryArgs": [
            {
                "name": "amount",
                "wire": "amount"
            }
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
        "entity": "search",
        "accessor": "Search",
        "op": "list",
        "method": "GET",
        "path": "/search",
        "args": [],
        "select": {
            "query": "Senko",
            "type": 1,
            "amount": 10,
            "category": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "query",
            "type",
            "category",
            "amount"
        ],
        "queryArgs": [
            {
                "name": "amount",
                "wire": "amount"
            },
            {
                "name": "category",
                "wire": "category"
            },
            {
                "name": "query",
                "wire": "query"
            },
            {
                "name": "type",
                "wire": "type"
            }
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
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map