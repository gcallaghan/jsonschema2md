---
template: reference
foo: bar
---

# Custom Schema

```
https://example.com/schemas/custom
```

This is an extensible schema. It has `definitions`, that can be used in other schemas. Additionally, it allows custom properties.

| [Abstract](../abstract.md) | Extensible | [Status](../status.md) | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------------------------|------------|------------------------|--------------|-------------------|-----------------------|------------|
| Cannot be instantiated | Yes | Experimental | No | Allowed | Permitted | [custom.schema.json](custom.schema.json) |

# Custom Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [bar](#bar) | `string` | Optional | Custom (this schema) |
| [foo](#foo) | `string` | Optional | Custom (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## bar

A unique identifier given to every addressable thing.

`bar`

* is optional
* type: `string`
* defined in this schema

### bar Type


`string`







## foo

A unique identifier given to every addressable thing.

`foo`

* is optional
* type: `string`
* defined in this schema

### foo Type


`string`







# Custom Definitions

| Property | Type | Group |
|----------|------|-------|
| [first](#first) | complex | `https://example.com/schemas/custom#/definitions/` |
| [second](#second) | complex | `https://example.com/schemas/custom#/definitions/` |

## first


`first`

* is optional
* type: complex
* defined in this schema

### first Type

Unknown type ``.

```json
{
  "properties": {
    "foo": {
      "type": "string",
      "description": "A unique identifier given to every addressable thing."
    }
  },
  "simpletype": "complex"
}
```





## second


`second`

* is optional
* type: complex
* defined in this schema

### second Type

Unknown type ``.

```json
{
  "properties": {
    "bar": {
      "type": "string",
      "description": "A unique identifier given to every addressable thing."
    }
  },
  "simpletype": "complex"
}
```




