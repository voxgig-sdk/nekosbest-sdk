package voxgignekosbestsdk

import (
	"github.com/voxgig-sdk/nekosbest-sdk/go/core"
	"github.com/voxgig-sdk/nekosbest-sdk/go/entity"
	"github.com/voxgig-sdk/nekosbest-sdk/go/feature"
	_ "github.com/voxgig-sdk/nekosbest-sdk/go/utility"
)

// Type aliases preserve external API.
type NekosbestSDK = core.NekosbestSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type NekosbestEntity = core.NekosbestEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type NekosbestError = core.NekosbestError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGetRandomByCategoryEntityFunc = func(client *core.NekosbestSDK, entopts map[string]any) core.NekosbestEntity {
		return entity.NewGetRandomByCategoryEntity(client, entopts)
	}
	core.NewImageEntityFunc = func(client *core.NekosbestSDK, entopts map[string]any) core.NekosbestEntity {
		return entity.NewImageEntity(client, entopts)
	}
	core.NewSearchEntityFunc = func(client *core.NekosbestSDK, entopts map[string]any) core.NekosbestEntity {
		return entity.NewSearchEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewNekosbestSDK = core.NewNekosbestSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewNekosbestSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *NekosbestSDK  { return NewNekosbestSDK(nil) }
func Test() *NekosbestSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
