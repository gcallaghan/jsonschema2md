---
template: reference
foo: bar
---

# Extensible Schema

```
https://example.com/schemas/extensible
```

This is an extensible schema. It has `definitions`, that can be used in other schemas

| [Abstract](../abstract.md) | Extensible | [Status](../status.md) | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------------------------|------------|------------------------|--------------|-------------------|-----------------------|------------|
| Cannot be instantiated | Yes | Experimental | No | Forbidden | Permitted | [extensible.schema.json](extensible.schema.json) |

# Extensible Definitions

| Property | Type | Group |
|----------|------|-------|
| [first](#first) | complex | `https://example.com/schemas/extensible#/definitions/` |
| [second](#second) | complex | `https://example.com/schemas/extensible#/definitions/` |

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
      "examples": [
        "bar"
      ],
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
      "examples": [
        "whoo",
        "hoo"
      ],
      "description": "A horse walks into it."
    }
  },
  "simpletype": "complex"
}
```




