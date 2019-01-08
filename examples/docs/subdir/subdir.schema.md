---
template: reference
foo: bar
---

# Subdir Schema

```
https://example.com/schemas/subdir/subdir
```

A schema in a sub directory

| [Abstract](../../abstract.md) | Extensible | [Status](../../status.md) | Identifiable | Custom Properties | Additional Properties | Defined In |
|-------------------------------|------------|---------------------------|--------------|-------------------|-----------------------|------------|
| Cannot be instantiated | Yes | Experimental | No | Forbidden | Permitted | [subdir/subdir.schema.json](subdir/subdir.schema.json) |

# Subdir Definitions

| Property | Type | Group |
|----------|------|-------|
| [content](#content) | complex | `https://example.com/schemas/subdir/subdir#/definitions/` |

## content


`content`

* is optional
* type: complex
* defined in this schema

### content Type

Unknown type ``.

```json
{
  "properties": {
    "id": {
      "type": "string",
      "format": "uri",
      "description": "A unique identifier given to every addressable thing."
    }
  },
  "simpletype": "complex"
}
```




