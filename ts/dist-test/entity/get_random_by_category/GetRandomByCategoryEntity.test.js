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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "anime_name", "req": false, "short": "Name of the anime the character is from (if applicable)", "type": "`$STRING`", "index$": 0 }, { "active": true, "format": "uri", "name": "artist_href", "req": false, "short": "URL to the artist's profile or website", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "artist_name", "req": false, "short": "Name of the artist who created the image", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "format": "uri", "name": "source_url", "req": false, "short": "Original source URL of the image", "type": "`$STRING`", "index$": 4 }, { "active": true, "format": "uri", "name": "url", "req": true, "short": "Direct URL to the image or GIF hosted on nekos.best", "type": "`$STRING`", "index$": 5 }], "id": { "field": "id", "name": "id" }, "name": "get_random_by_category", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "neko", "kind": "param", "name": "id", "orig": "category", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": 1, "kind": "query", "name": "amount", "orig": "amount", "reqd": false, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /{category}", "json": "{\"operationId\":\"getRandomByCategory\",\"parameters\":[{\"description\":\"The category name (e.g., neko, husbando, kitsune, waifu, etc.)\",\"in\":\"path\",\"name\":\"category\",\"required\":true,\"schema\":{\"example\":\"neko\",\"type\":\"string\"}},{\"description\":\"Number of images/GIFs to return (1-20)\",\"in\":\"query\",\"name\":\"amount\",\"required\":false,\"schema\":{\"default\":1,\"maximum\":20,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"single\":{\"summary\":\"Single image response\",\"value\":{\"results\":[{\"anime_name\":\"Anime Title\",\"artist_href\":\"https://www.pixiv.net/en/users/12345\",\"artist_name\":\"Artist Name\",\"source_url\":\"https://www.pixiv.net/en/artworks/67890\",\"url\":\"https://nekos.best/api/v2/neko/001.png\"}]}}},\"schema\":{\"properties\":{\"results\":{\"description\":\"Array of image/GIF objects\",\"items\":{\"properties\":{\"anime_name\":{\"description\":\"Name of the anime the character is from (if applicable)\",\"example\":\"Anime Title\",\"type\":\"string\"},\"artist_href\":{\"description\":\"URL to the artist's profile or website\",\"example\":\"https://www.pixiv.net/en/users/12345\",\"format\":\"uri\",\"type\":\"string\"},\"artist_name\":{\"description\":\"Name of the artist who created the image\",\"example\":\"Artist Name\",\"type\":\"string\"},\"source_url\":{\"description\":\"Original source URL of the image\",\"example\":\"https://www.pixiv.net/en/artworks/67890\",\"format\":\"uri\",\"type\":\"string\"},\"url\":{\"description\":\"Direct URL to the image or GIF hosted on nekos.best\",\"example\":\"https://nekos.best/api/v2/neko/001.png\",\"format\":\"uri\",\"type\":\"string\"}},\"required\":[\"url\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"Successful response with image/GIF data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Category not found\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/{category}", "rename": { "param": { "category": "id" } }, "segments": [{ "var": "id" }], "select": { "exist": ["amount", "id"] }, "transform": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "get_random_by_category", "name__orig": "get_random_by_category", "Name": "GetRandomByCategory", "name_": "get_random_by_category", "name-": "get-random-by-category", "NAME": "GET_RANDOM_BY_CATEGORY", "index$": 0 }, { "active": true, "entity": "get_random_by_category", "key$": "BasicGetRandomByCategoryFlow", "kind": "basic", "name": "BasicGetRandomByCategoryFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "category": "category01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "get_random_by_category_ref01" } }], "index$": 0 }] }, 'GetRandomByCategory');
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
    let idmap = transform(['get_random_by_category01', 'get_random_by_category02', 'get_random_by_category03'], {
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