# gux-listbox

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type                                  | Default     |
| ------------ | ------------- | ----------- | ------------------------------------- | ----------- |
| `filter`     | `filter`      |             | `string`                              | `''`        |
| `filterType` | `filter-type` |             | `"custom" \| "none" \| "starts-with"` | `'none'`    |
| `loading`    | `loading`     |             | `boolean`                             | `false`     |
| `value`      | `value`       |             | `string`                              | `undefined` |


## Events

| Event                           | Description | Type               |
| ------------------------------- | ----------- | ------------------ |
| `internallistboxoptionsupdated` |             | `CustomEvent<any>` |


## Methods

### `guxSelectActive() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description                       |
| ---- | --------------------------------- |
|      | collection of gux-option elements |


## Dependencies

### Used by

 - [gux-pagination-items-per-page](../gux-pagination/gux-pagination-items-per-page)
 - [gux-pagination-items-per-page-beta](../../beta/gux-pagination-beta/gux-pagination-items-per-page-beta)
 - [gux-phone-input-beta](../../beta/gux-phone-input)

### Depends on

- [gux-radial-loading](../gux-radial-loading)

### Graph
```mermaid
graph TD;
  gux-listbox --> gux-radial-loading
  gux-pagination-items-per-page --> gux-listbox
  gux-pagination-items-per-page-beta --> gux-listbox
  gux-phone-input-beta --> gux-listbox
  style gux-listbox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
