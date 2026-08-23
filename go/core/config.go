package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Nekosbest",
			"slug": "nekosbest",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://nekos.best/api/v2",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"get_random_by_category": map[string]any{},
				"image": map[string]any{},
				"search": map[string]any{},
			},
		},
		"entity": map[string]any{
			"get_random_by_category": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "anime_name",
						"short": "Name of the anime the character is from (if applicable)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "artist_href",
						"short": "URL to the artist's profile or website",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "artist_name",
						"short": "Name of the artist who created the image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source_url",
						"short": "Original source URL of the image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"req": true,
						"short": "Direct URL to the image or GIF hosted on nekos.best",
						"type": "`$STRING`",
					},
				},
				"name": "get_random_by_category",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "neko",
											"kind": "param",
											"name": "id",
											"orig": "category",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "amount",
											"orig": "amount",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{category}",
								"parts": []any{
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"category": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"amount",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"image": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "categories",
						"short": "Total number of categories",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "endpoints",
						"short": "Array of available category names",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "total_gifs",
						"short": "Total number of GIFs available",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "total_images",
						"short": "Total number of images available",
						"type": "`$INTEGER`",
					},
				},
				"name": "image",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/endpoints",
								"parts": []any{
									"endpoints",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.endpoints`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/stats",
								"parts": []any{
									"stats",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "anime_name",
						"short": "Name of the anime the character is from (if applicable)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "artist_href",
						"short": "URL to the artist's profile or website",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "artist_name",
						"short": "Name of the artist who created the image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source_url",
						"short": "Original source URL of the image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"req": true,
						"short": "Direct URL to the image or GIF hosted on nekos.best",
						"type": "`$STRING`",
					},
				},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "amount",
											"orig": "amount",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/search",
								"parts": []any{
									"search",
								},
								"select": map[string]any{
									"exist": []any{
										"amount",
										"category",
										"query",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
