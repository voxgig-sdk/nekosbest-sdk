
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { NekosbestSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await NekosbestSDK.test()
    equal(null !== testsdk, true)
  })

})
