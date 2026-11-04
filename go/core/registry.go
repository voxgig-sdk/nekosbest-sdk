package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewImageEntityFunc func(client *NekosbestSDK, entopts map[string]any) NekosbestEntityBase

var NewRandomByCategoryEntityFunc func(client *NekosbestSDK, entopts map[string]any) NekosbestEntityBase

var NewSearchEntityFunc func(client *NekosbestSDK, entopts map[string]any) NekosbestEntityBase

