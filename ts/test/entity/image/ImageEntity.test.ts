

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ImageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEKOSBEST_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEKOSBEST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NekosbestSDK.test()
    const ent = testsdk.Image()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEKOSBEST_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'image.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"categories":{"a":true,"h":"Categories","n":"categories","r":false,"sh":"Total number of categories","t":"`$INTEGER`","key$":"categories","index$":0},"endpoints":{"a":true,"h":"Endpoints","n":"endpoints","r":false,"sh":"Array of available category names","t":"`$ARRAY`","key$":"endpoints","index$":1},"total_gifs":{"a":true,"h":"Total Gifs","n":"total_gifs","r":false,"sh":"Total number of GIFs available","t":"`$INTEGER`","key$":"total_gifs","index$":2},"total_images":{"a":true,"h":"Total Images","n":"total_images","r":false,"sh":"Total number of images available","t":"`$INTEGER`","key$":"total_images","index$":3}},"name":"image","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /endpoints","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/endpoints","q":{},"r":{},"s":[{"lit":"endpoints"}],"t":{"req":"`reqdata`","res":"`body.endpoints`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /stats","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/stats","q":{},"r":{},"s":[{"lit":"stats"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"image","name__orig":"image","Name":"Image","name_":"image","name-":"image","NAME":"IMAGE","index$":1}, {"active":true,"entity":"image","key$":"BasicImageFlow","kind":"basic","name":"BasicImageFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"image_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"image_ref01","srcdatavar":"image_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-image_ref01"}}],"index$":1}]}, 'Image', {"GET /endpoints":{"protocol":"http","operationId":"getEndpoints","responses":{"200":{"description":"Successful response with list of available endpoints","content":{"application/json":{"schema":{"type":"object","properties":{"endpoints":{"description":"Array of available category names","items":{"type":"string"},"key$":"endpoints","type":"array"}},"index$":0},"examples":{"endpoints":{"summary":"Available endpoints","value":{"endpoints":["neko","husbando","kitsune","waifu","pat","hug","kiss","slap","cuddle","bite"]}}}}}}},"parameters":[],"securitySource":"unspecified"},"GET /stats":{"protocol":"http","operationId":"getStats","responses":{"200":{"description":"Successful response with API statistics","content":{"application/json":{"schema":{"type":"object","properties":{"total_images":{"description":"Total number of images available","key$":"total_images","type":"integer"},"total_gifs":{"description":"Total number of GIFs available","key$":"total_gifs","type":"integer"},"categories":{"description":"Total number of categories","key$":"categories","type":"integer"}},"index$":0},"examples":{"stats":{"summary":"API statistics","value":{"total_images":5000,"total_gifs":3000,"categories":48}}}}}}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let image_ref01_data = Object.values(setup.data.existing.image)[0] as any

    // LIST
    const image_ref01_ent = client.Image()
    const image_ref01_match: any = {}

    const image_ref01_list = (await image_ref01_ent.list(image_ref01_match)).map((e: any) => e.data())


    // LOAD
    const image_ref01_match_dt0: any = {}
    const image_ref01_data_dt0 = (await image_ref01_ent.load(image_ref01_match_dt0)).data()
    assert(null != image_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/image/ImageTestData.json')

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
    ['image01','image02','image03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEKOSBEST_TEST_IMAGE_ENTID': idmap,
    'NEKOSBEST_TEST_LIVE': 'FALSE',
    'NEKOSBEST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['NEKOSBEST_TEST_IMAGE_ENTID']

  const live = 'TRUE' === env.NEKOSBEST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEKOSBEST_TEST_IMAGE_ENTID']
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
  
