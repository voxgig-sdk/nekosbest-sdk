-- Nekosbest SDK error

local NekosbestError = {}
NekosbestError.__index = NekosbestError


function NekosbestError.new(code, msg, ctx)
  local self = setmetatable({}, NekosbestError)
  self.is_sdk_error = true
  self.sdk = "Nekosbest"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function NekosbestError:error()
  return self.msg
end


function NekosbestError:__tostring()
  return self.msg
end


return NekosbestError
