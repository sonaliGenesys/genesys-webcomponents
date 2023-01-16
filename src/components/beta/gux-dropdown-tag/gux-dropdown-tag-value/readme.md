# gux-dropdown-multi-tag



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description       | Type      | Default |
| ---------------- | ----------------- | ----------------- | --------- | ------- |
| `disabled`       | `disabled`        | Tag is removable. | `boolean` | `false` |
| `numberSelected` | `number-selected` |                   | `number`  | `0`     |
| `optionSelected` | `option-selected` |                   | `string`  | `''`    |


## Events

| Event                   | Description                           | Type                  |
| ----------------------- | ------------------------------------- | --------------------- |
| `internalclearselected` | Triggered when click on remove button | `CustomEvent<string>` |


## Dependencies

### Used by

 - [gux-dropdown-tag](..)

### Depends on

- [gux-icon](../../../stable/gux-icon)

### Graph
```mermaid
graph TD;
  gux-dropdown-tag-value --> gux-icon
  gux-dropdown-tag --> gux-dropdown-tag-value
  style gux-dropdown-tag-value fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
