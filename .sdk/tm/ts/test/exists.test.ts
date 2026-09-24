
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { NekosbestSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = NekosbestSDK.test()
    equal(testsdk instanceof NekosbestSDK, true,
      'NekosbestSDK.test() must return a client synchronously')
  })

})
