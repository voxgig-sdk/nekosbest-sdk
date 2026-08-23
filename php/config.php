<?php
declare(strict_types=1);

// Nekosbest SDK configuration

class NekosbestConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Nekosbest",
                "slug" => "nekosbest",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://nekos.best/api/v2",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "get_random_by_category" => [],
                    "image" => [],
                    "search" => [],
                ],
            ],
            "entity" => [
        'get_random_by_category' => [
          'fields' => [
            [
              'name' => 'anime_name',
              'short' => 'Name of the anime the character is from (if applicable)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'artist_href',
              'short' => 'URL to the artist\'s profile or website',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'artist_name',
              'short' => 'Name of the artist who created the image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'source_url',
              'short' => 'Original source URL of the image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'req' => true,
              'short' => 'Direct URL to the image or GIF hosted on nekos.best',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'get_random_by_category',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'neko',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'category',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'amount',
                        'orig' => 'amount',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{category}',
                  'parts' => [
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'category' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'amount',
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.results`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'image' => [
          'fields' => [
            [
              'name' => 'categories',
              'short' => 'Total number of categories',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'endpoints',
              'short' => 'Array of available category names',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'total_gifs',
              'short' => 'Total number of GIFs available',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'total_images',
              'short' => 'Total number of images available',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'image',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/endpoints',
                  'parts' => [
                    'endpoints',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.endpoints`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/stats',
                  'parts' => [
                    'stats',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'search' => [
          'fields' => [
            [
              'name' => 'anime_name',
              'short' => 'Name of the anime the character is from (if applicable)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'artist_href',
              'short' => 'URL to the artist\'s profile or website',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'artist_name',
              'short' => 'Name of the artist who created the image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'source_url',
              'short' => 'Original source URL of the image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'req' => true,
              'short' => 'Direct URL to the image or GIF hosted on nekos.best',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'search',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'amount',
                        'orig' => 'amount',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'category',
                        'orig' => 'category',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/search',
                  'parts' => [
                    'search',
                  ],
                  'select' => [
                    'exist' => [
                      'amount',
                      'category',
                      'query',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.results`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return NekosbestFeatures::make_feature($name);
    }
}
