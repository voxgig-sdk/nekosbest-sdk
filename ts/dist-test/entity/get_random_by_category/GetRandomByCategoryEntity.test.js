"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('GetRandomByCategoryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEKOSBEST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEKOSBEST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NekosbestSDK.test();
        const ent = testsdk.GetRandomByCategory();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEKOSBEST_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'get_random_by_category.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "anime_name": { "a": true, "h": "Anime Name", "n": "anime_name", "r": false, "sh": "Name of the anime the character is from (if applicable)", "t": "`$STRING`", "key$": "anime_name", "index$": 0 }, "artist_href": { "a": true, "fo": "uri", "h": "Artist Href", "n": "artist_href", "r": false, "sh": "URL to the artist's profile or website", "t": "`$STRING`", "key$": "artist_href", "index$": 1 }, "artist_name": { "a": true, "h": "Artist Name", "n": "artist_name", "r": false, "sh": "Name of the artist who created the image", "t": "`$STRING`", "key$": "artist_name", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 3 }, "source_url": { "a": true, "fo": "uri", "h": "Source Url", "n": "source_url", "r": false, "sh": "Original source URL of the image", "t": "`$STRING`", "key$": "source_url", "index$": 4 }, "url": { "a": true, "fo": "uri", "h": "Url", "n": "url", "r": true, "sh": "Direct URL to the image or GIF hosted on nekos.best", "t": "`$STRING`", "key$": "url", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "get_random_by_category", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /{category}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "neko", "k": "param", "n": "id", "or": "category", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "amount", "or": "amount", "r": false, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/{category}", "q": { "exist": ["amount", "id"] }, "r": { "param": { "category": "id" } }, "s": [{ "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "get_random_by_category", "name__orig": "get_random_by_category", "Name": "GetRandomByCategory", "name_": "get_random_by_category", "name-": "get-random-by-category", "NAME": "GET_RANDOM_BY_CATEGORY", "index$": 0 }, { "active": true, "entity": "get_random_by_category", "key$": "BasicGetRandomByCategoryFlow", "kind": "basic", "name": "BasicGetRandomByCategoryFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "category": "category01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "get_random_by_category_ref01" } }], "index$": 0 }] }, 'GetRandomByCategory', { "GET /{category}": { "protocol": "http", "operationId": "getRandomByCategory", "responses": { "200": { "description": "Successful response with image/GIF data", "content": { "application/json": { "schema": { "type": "object", "properties": { "results": { "description": "Array of image/GIF objects", "items": { "properties": { "anime_name": { "description": "Name of the anime the character is from (if applicable)", "example": "Anime Title", "type": "string", "key$": "anime_name" }, "artist_href": { "description": "URL to the artist's profile or website", "example": "https://www.pixiv.net/en/users/12345", "format": "uri", "type": "string", "key$": "artist_href" }, "artist_name": { "description": "Name of the artist who created the image", "example": "Artist Name", "type": "string", "key$": "artist_name" }, "source_url": { "description": "Original source URL of the image", "example": "https://www.pixiv.net/en/artworks/67890", "format": "uri", "type": "string", "key$": "source_url" }, "url": { "description": "Direct URL to the image or GIF hosted on nekos.best", "example": "https://nekos.best/api/v2/neko/001.png", "format": "uri", "type": "string", "key$": "url" } }, "required": ["url"], "type": "object", "x-ref": "#/components/schemas/ImageItem", "index$": 0 }, "key$": "results", "type": "array" } }, "required": ["results"], "x-ref": "#/components/schemas/ImageResponse" }, "examples": { "single": { "summary": "Single image response", "value": { "results": [{ "artist_href": "https://www.pixiv.net/en/users/12345", "artist_name": "Artist Name", "source_url": "https://www.pixiv.net/en/artworks/67890", "url": "https://nekos.best/api/v2/neko/001.png", "anime_name": "Anime Title" }] } } } } } }, "400": { "description": "Bad request - invalid parameters", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" }, "message": { "type": "string", "description": "Detailed error description" } }, "x-ref": "#/components/schemas/Error" } } } }, "404": { "description": "Category not found", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" }, "message": { "type": "string", "description": "Detailed error description" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "category", "in": "path", "description": "The category name (e.g., neko, husbando, kitsune, waifu, etc.)", "required": true, "schema": { "type": "string", "example": "neko" }, "index$": 0 }, { "name": "amount", "in": "query", "description": "Number of images/GIFs to return (1-20)", "required": false, "schema": { "type": "integer", "minimum": 1, "maximum": 20, "default": 1 }, "index$": 1 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let get_random_by_category_ref01_data = Object.values(setup.data.existing.get_random_by_category)[0];
        // LIST
        const get_random_by_category_ref01_ent = client.GetRandomByCategory();
        const get_random_by_category_ref01_match = {};
        get_random_by_category_ref01_match['category'] = setup.idmap['category01'];
        const get_random_by_category_ref01_list = (await get_random_by_category_ref01_ent.list(get_random_by_category_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/get_random_by_category/GetRandomByCategoryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NekosbestSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['get_random_by_category01', 'get_random_by_category02', 'get_random_by_category03', 'category01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEKOSBEST_TEST_GET_RANDOM_BY_CATEGORY_ENTID': idmap,
        'NEKOSBEST_TEST_LIVE': 'FALSE',
        'NEKOSBEST_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['NEKOSBEST_TEST_GET_RANDOM_BY_CATEGORY_ENTID'];
    const live = 'TRUE' === env.NEKOSBEST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEKOSBEST_TEST_GET_RANDOM_BY_CATEGORY_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.NekosbestSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.NEKOSBEST_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=GetRandomByCategoryEntity.test.js.map