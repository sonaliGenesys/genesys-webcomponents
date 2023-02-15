# gux-dropdown-multi

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type      | Default     |
| ---------------- | ----------------- | ----------- | --------- | ----------- |
| `disabled`       | `disabled`        |             | `boolean` | `false`     |
| `hasError`       | `has-error`       |             | `boolean` | `false`     |
| `loading`        | `loading`         |             | `boolean` | `false`     |
| `placeholder`    | `placeholder`     |             | `string`  | `undefined` |
| `required`       | `required`        |             | `boolean` | `false`     |
| `selectionLimit` | `selection-limit` |             | `number`  | `undefined` |
| `value`          | `value`           |             | `string`  | `undefined` |


## Events

| Event             | Description                                                                   | Type                |
| ----------------- | ----------------------------------------------------------------------------- | ------------------- |
| `guxcollapsed`    | This event will run when the dropdown-multi transitions to a collapsed state. | `CustomEvent<void>` |
| `guxcreateoption` | This event is emitted to request creating a new option                        | `CustomEvent<any>`  |
| `guxexpanded`     | This event will run when the dropdown-multi transitions to an expanded state. | `CustomEvent<void>` |


## Methods

### `getSelectedValues() => Promise<string[]>`

Returns an array of the selected values

#### Returns

Type: `Promise<string[]>`




## Slots

| Slot | Description                                                  |
| ---- | ------------------------------------------------------------ |
|      | for a gux-listbox-multi containing gux-option-multi children |


## Dependencies

### Depends on

- [gux-dropdown-tag-value](gux-dropdown-tag-value)
- [gux-icon](../../stable/gux-icon)
- [gux-radial-loading](../../stable/gux-radial-loading)
- [gux-popup](../../stable/gux-popup)

### Graph
```mermaid
graph TD;
  gux-dropdown-tag --> gux-dropdown-tag-value
  gux-dropdown-tag --> gux-icon
  gux-dropdown-tag --> gux-radial-loading
  gux-dropdown-tag --> gux-popup
  gux-dropdown-tag-value --> gux-icon
  style gux-dropdown-tag fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*