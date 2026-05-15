
import { Context } from './Context'


class NekosbestError extends Error {

  isNekosbestError = true

  sdk = 'Nekosbest'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  NekosbestError
}

