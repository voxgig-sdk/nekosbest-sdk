package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGetRandomByCategoryEntityFunc func(client *NekosbestSDK, entopts map[string]any) NekosbestEntity

var NewImageEntityFunc func(client *NekosbestSDK, entopts map[string]any) NekosbestEntity

var NewSearchEntityFunc func(client *NekosbestSDK, entopts map[string]any) NekosbestEntity

