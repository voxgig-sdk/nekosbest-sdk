package = "voxgig-sdk-nekosbest"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/nekosbest-sdk.git"
}
description = {
  summary = "Nekosbest SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["nekosbest_sdk"] = "nekosbest_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
