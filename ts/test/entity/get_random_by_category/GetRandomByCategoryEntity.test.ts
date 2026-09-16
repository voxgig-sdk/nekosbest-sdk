

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { NekosbestSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetRandomByCategoryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEKOSBEST_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEKOSBEST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NekosbestSDK.test()
    const ent = testsdk.GetRandomByCategory()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEKOSBEST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_random_by_category.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"anime_name","req":false,"short":"Name of the anime the character is from (if applicable)","type":"`$STRING`","index$":0},{"active":true,"format":"uri","name":"artist_href","req":false,"short":"URL to the artist's profile or website","type":"`$STRING`","index$":1},{"active":true,"name":"artist_name","req":false,"short":"Name of the artist who created the image","type":"`$STRING`","index$":2},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":3},{"active":true,"format":"uri","name":"source_url","req":false,"short":"Original source URL of the image","type":"`$STRING`","index$":4},{"active":true,"format":"uri","name":"url","req":true,"short":"Direct URL to the image or GIF hosted on nekos.best","type":"`$STRING`","index$":5}],"id":{"field":"id","name":"id"},"name":"get_random_by_category","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":"neko","kind":"param","name":"id","orig":"category","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":1,"kind":"query","name":"amount","orig":"amount","reqd":false,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /{category}","json":"{\"operationId\":\"getRandomByCategory\",\"parameters\":[{\"description\":\"The category name (e.g., neko, husbando, kitsune, waifu, etc.)\",\"in\":\"path\",\"name\":\"category\",\"required\":true,\"schema\":{\"example\":\"neko\",\"type\":\"string\"}},{\"description\":\"Number of images/GIFs to return (1-20)\",\"in\":\"query\",\"name\":\"amount\",\"required\":false,\"schema\":{\"default\":1,\"maximum\":20,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"single\":{\"summary\":\"Single image response\",\"value\":{\"results\":[{\"anime_name\":\"Anime Title\",\"artist_href\":\"https://www.pixiv.net/en/users/12345\",\"artist_name\":\"Artist Name\",\"source_url\":\"https://www.pixiv.net/en/artworks/67890\",\"url\":\"https://nekos.best/api/v2/neko/001.png\"}]}}},\"schema\":{\"properties\":{\"results\":{\"description\":\"Array of image/GIF objects\",\"items\":{\"properties\":{\"anime_name\":{\"description\":\"Name of the anime the character is from (if applicable)\",\"example\":\"Anime Title\",\"type\":\"string\"},\"artist_href\":{\"description\":\"URL to the artist's profile or website\",\"example\":\"https://www.pixiv.net/en/users/12345\",\"format\":\"uri\",\"type\":\"string\"},\"artist_name\":{\"description\":\"Name of the artist who created the image\",\"example\":\"Artist Name\",\"type\":\"string\"},\"source_url\":{\"description\":\"Original source URL of the image\",\"example\":\"https://www.pixiv.net/en/artworks/67890\",\"format\":\"uri\",\"type\":\"string\"},\"url\":{\"description\":\"Direct URL to the image or GIF hosted on nekos.best\",\"example\":\"https://nekos.best/api/v2/neko/001.png\",\"format\":\"uri\",\"type\":\"string\"}},\"required\":[\"url\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"Successful response with image/GIF data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Category not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/{category}","rename":{"param":{"category":"id"}},"segments":[{"var":"id"}],"select":{"exist":["amount","id"]},"transform":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"get_random_by_category","name__orig":"get_random_by_category","Name":"GetRandomByCategory","name_":"get_random_by_category","name-":"get-random-by-category","NAME":"GET_RANDOM_BY_CATEGORY","index$":0}, {"active":true,"entity":"get_random_by_category","key$":"BasicGetRandomByCategoryFlow","kind":"basic","name":"BasicGetRandomByCategoryFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"category":"category01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"get_random_by_category_ref01"}}],"index$":0}]}, 'GetRandomByCategory')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_random_by_category_ref01_data = Object.values(setup.data.existing.get_random_by_category)[0] as any

    // LIST
    const get_random_by_category_ref01_ent = client.GetRandomByCategory()
    const get_random_by_category_ref01_match: any = {}
    get_random_by_category_ref01_match['category'] = setup.idmap['category01']

    const get_random_by_category_ref01_list = (await get_random_by_category_ref01_ent.list(get_random_by_category_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_random_by_category/GetRandomByCategoryTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = NekosbestSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_random_by_category01','get_random_by_category02','get_random_by_category03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEKOSBEST_TEST_GET_RANDOM_BY_CATEGORY_ENTID': idmap,
    'NEKOSBEST_TEST_LIVE': 'FALSE',
    'NEKOSBEST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['NEKOSBEST_TEST_GET_RANDOM_BY_CATEGORY_ENTID']

  const live = 'TRUE' === env.NEKOSBEST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEKOSBEST_TEST_GET_RANDOM_BY_CATEGORY_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new NekosbestSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
