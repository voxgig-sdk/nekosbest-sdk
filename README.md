# Nekosbest SDK

Fetch SFW anime images and GIFs by reaction category, with artist and source attribution

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About nekos.best API

[nekos.best](https://nekos.best/) is a community-run RESTful API that serves fully SFW, high-quality anime images and GIFs organised by reaction or character category (neko, hug, tickle, and many more). The project also publishes official client libraries for Python, JavaScript, and Rust.

What you get from the API:

- `GET /endpoints` — dynamically discover the current list of categories and which file format (image or GIF) each one returns
- `GET /{category}` — fetch a random asset (or up to 20 via `?amount=`) with metadata: image URL, dimensions, `artist_name`, `artist_href`, `anime_name`, and `source_url`
- `GET /search` — search assets by `query` and `type` (1 = images, 2 = GIFs), with optional `category` and `amount` filters
- `GET /{category}/{filename}.{format}` — direct asset retrieval, with metadata returned via URL-encoded HTTP response headers

No API key or authentication is required. The docs recommend calling `/endpoints` at runtime rather than hard-coding the category list, since new categories are added over time. v2 is the current maintained version of the API.

## Try it

**TypeScript**
```bash
npm install nekosbest
```

**Python**
```bash
pip install nekosbest-sdk
```

**PHP**
```bash
composer require voxgig/nekosbest-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/nekosbest-sdk/go
```

**Ruby**
```bash
gem install nekosbest-sdk
```

**Lua**
```bash
luarocks install nekosbest-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { NekosbestSDK } from 'nekosbest'

const client = new NekosbestSDK({})

// List all getrandombycategorys
const getrandombycategorys = await client.GetRandomByCategory().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o nekosbest-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "nekosbest": {
      "command": "/abs/path/to/nekosbest-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **GetRandomByCategory** | Fetches a random image or GIF from a named category (e.g. `neko`, `hug`, `tickle`) via `GET /{category}`, with `?amount=` returning up to 20 results. | `/{category}` |
| **Image** | Represents a returned asset record — image/GIF URL plus metadata fields including `artist_name`, `artist_href`, `anime_name`, and `source_url`. | `/endpoints` |
| **Search** | Searches assets by metadata via `GET /search`, requiring `query` and `type` (1 for images, 2 for GIFs), with optional `category` and `amount` parameters. | `/search` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from nekosbest_sdk import NekosbestSDK

client = NekosbestSDK({})

# List all getrandombycategorys
getrandombycategorys, err = client.GetRandomByCategory(None).list(None, None)
```

### PHP

```php
<?php
require_once 'nekosbest_sdk.php';

$client = new NekosbestSDK([]);

// List all getrandombycategorys
[$getrandombycategorys, $err] = $client->GetRandomByCategory(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/nekosbest-sdk/go"

client := sdk.NewNekosbestSDK(map[string]any{})

// List all getrandombycategorys
getrandombycategorys, err := client.GetRandomByCategory(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Nekosbest_sdk"

client = NekosbestSDK.new({})

# List all getrandombycategorys
getrandombycategorys, err = client.GetRandomByCategory(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("nekosbest_sdk")

local client = sdk.new({})

-- List all getrandombycategorys
local getrandombycategorys, err = client:GetRandomByCategory(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = NekosbestSDK.test()
const result = await client.GetRandomByCategory().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = NekosbestSDK.test(None, None)
result, err = client.GetRandomByCategory(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = NekosbestSDK::test(null, null);
[$result, $err] = $client->GetRandomByCategory(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GetRandomByCategory(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = NekosbestSDK.test(nil, nil)
result, err = client.GetRandomByCategory(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GetRandomByCategory(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the nekos.best API

- Upstream: [https://nekos.best/](https://nekos.best/)
- API docs: [https://docs.nekos.best/](https://docs.nekos.best/)

- Free to use without authentication
- Image and GIF assets are sourced from third-party artists; the API returns `artist_name`, `artist_href`, and `source_url` so you can attribute correctly
- See the project's Terms of Service, Privacy Policy, and DMCA pages linked from the docs site for takedown and usage rules

---

Generated from the nekos.best API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
