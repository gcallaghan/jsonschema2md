---
template: reference
foo: bar
---

# Abstract Schema

```
https://example.com/schemas/abstract
```

This is an abstract schema. It has `definitions`, but does not declare any properties

| [Abstract](../abstract.md) | Extensible | [Status](../status.md) | Identifiable | Custom Properties | Additional Properties | Defined In |
|----------------------------|------------|------------------------|--------------|-------------------|-----------------------|------------|
| Cannot be instantiated | Yes | Experimental | No | Forbidden | Permitted | [abstract.schema.json](abstract.schema.json) |

# Abstract Definitions

| Property | Type | Group |
|----------|------|-------|
| [first](#first) | `object` | `https://example.com/schemas/abstract#/definitions/` |
| [second](#second) | `object` | `https://example.com/schemas/abstract#/definitions/` |

## first


`first`

* is optional
* type: `object`
* defined in this schema

### first Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `foo`| string | Optional |
| `nonfoo`| boolean | Optional |



#### foo

A unique identifier given to every addressable thing.

`foo`

* is optional
* type: `string`

##### foo Type


`string`









#### nonfoo

This is not foo.

`nonfoo`

* is optional
* type: `const`

The value of this property **must** be equal to:

```json
false
```










## second


`second`

* is optional
* type: `object`
* defined in this schema

### second Type


`object` with following properties:


| Property | Type | Required |
|----------|------|----------|
| `bar`| string | Optional |



#### bar

A unique identifier given to every addressable thing.

`bar`

* is optional
* type: `string`

##### bar Type


`string`











