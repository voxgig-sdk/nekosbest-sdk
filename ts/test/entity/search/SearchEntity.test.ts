

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { NekosbestSDK, BaseFeature, config, stdutil } from '../../..'

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('SearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEKOSBEST_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEKOSBEST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NekosbestSDK.test()
    const ent = testsdk.Search()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('search hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of NekosbestSDK.test(offline).Search().stream('list')) { }
    }, /offline/)

    for await (const _item of NekosbestSDK.test(offline).Search()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = NekosbestSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Search().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of NekosbestSDK.test().Search().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new NekosbestSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Search().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Search().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = NekosbestSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Search().list({"amount":"x","query":"x","type":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEKOSBEST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"anime_name":{"a":true,"h":"Anime Name","n":"anime_name","r":false,"sh":"Name of the anime the character is from (if applicable)","t":"`$STRING`","key$":"anime_name","index$":0},"artist_href":{"a":true,"fo":"uri","h":"Artist Href","n":"artist_href","r":false,"sh":"URL to the artist's profile or website","t":"`$STRING`","key$":"artist_href","index$":1},"artist_name":{"a":true,"h":"Artist Name","n":"artist_name","r":false,"sh":"Name of the artist who created the image","t":"`$STRING`","key$":"artist_name","index$":2},"source_url":{"a":true,"fo":"uri","h":"Source Url","n":"source_url","r":false,"sh":"Original source URL of the image","t":"`$STRING`","key$":"source_url","index$":3},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":true,"sh":"Direct URL to the image or GIF hosted on nekos.best","t":"`$STRING`","key$":"url","index$":4}},"name":"search","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /search","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":10,"k":"query","n":"amount","or":"amount","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"category","or":"category","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"Senko","k":"query","n":"query","or":"query","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":1,"k":"query","n":"type","or":"type","r":true,"t":"`$INTEGER`","index$":3}]},"k":"http","m":"GET","o":"/search","q":{"exist":["query","type"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":2}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"search_ref01"}}],"index$":0}]}, 'Search', {"GET /search":{"protocol":"http","parameters":[{"name":"query","in":"query","description":"Search query string","required":true,"schema":{"type":"string"},"example":"Senko","index$":0},{"name":"type","in":"query","required":true,"description":"Result type: 1 = images, 2 = GIFs (required; 400 without it)","schema":{"type":"integer","enum":[1,2]},"example":1,"index$":1},{"name":"category","in":"query","description":"Filter by specific category","required":false,"schema":{"type":"string"},"index$":2},{"name":"amount","in":"query","description":"Number of results to return","required":false,"schema":{"type":"integer","minimum":1,"maximum":20,"default":10},"index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let search_ref01_data = Object.values(setup.data.existing.search)[0] as any

    // LIST
    const search_ref01_ent = client.Search()
    const search_ref01_match: any = {}

    const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e: any) => e.data())


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/search/SearchTestData.json')

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
    ['search01','search02','search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEKOSBEST_TEST_SEARCH_ENTID': idmap,
    'NEKOSBEST_TEST_LIVE': 'FALSE',
    'NEKOSBEST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['NEKOSBEST_TEST_SEARCH_ENTID']

  const live = 'TRUE' === env.NEKOSBEST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEKOSBEST_TEST_SEARCH_ENTID']
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
  
