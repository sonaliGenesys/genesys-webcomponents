# gux-dropdown-multi-tag



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description       | Type      | Default |
| ---------------- | ----------------- | ----------------- | --------- | ------- |
| `disabled`       | `disabled`        | Tag is removable. | `boolean` | `false` |
| `optionSelected` | `option-selected` |                   | `string`  | `''`    |
| `value`          | `value`           |                   | `string`  | `''`    |


## Events

| Event             | Description                             | Type                  |
| ----------------- | --------------------------------------- | --------------------- |
| `tagClicked`      | Fired when tag is clicked.              | `CustomEvent<string>` |
| `tagCloseClicked` | Fired when tag close button is clicked. | `CustomEvent<string>` |


## Dependencies

### Used by

 - [gux-dropdown-tag-beta](..)

### Depends on

- [gux-icon](../../../stable/gux-icon)

### Graph
```mermaid
graph TD;
  gux-dropdown-tag-value --> gux-icon
  gux-dropdown-tag-beta --> gux-dropdown-tag-value
  style gux-dropdown-tag-value fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
