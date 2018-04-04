# ⚛ React Checkbox Context

This package was heavily inspired by [react-checkbox-group](https://github.com/ziad-saab/react-checkbox-group) after it stopped working the way I used it. `<Checkbox />` elements suddenly had to be direct children of `<CheckboxGroup>` (which was impossible for my use case) or the `CheckboxGroup` explicitly needed to have a `checkboxDepth` prop (which was not flexible enough for me). So I decided to write my own `<CheckboxGroup>` component based on React's new [Context API](https://reactjs.org/docs/context.html).

Big thank you to [Ziad Saab](https://github.com/ziad-saab) for the inspiration!

## Installation
```
npm install react-checkbox-context
```
or

```
yarn add react-checkbox-context
```

## Example

What does `react-checkbox-context` do and how does it do that? Let me borrow the example from `react-checkbox-group` since the API is mostly identical:

This is your average checkbox group:

```js
<form>
  <input onChange={this.handleFruitChange} type="checkbox" name="fruit" value="apple" /> Apple
  <input onChange={this.handleFruitChange} type="checkbox" name="fruit" value="orange" /> Orange
  <input onChange={this.handleFruitChange} type="checkbox" name="fruit" value="watermelon" /> Watermelon
</form>
```

Repetitive, hard to manipulate and easily desynchronized. Lift up name and onChange, and give the group an initial checked values array:

```js
import { Checkbox, CheckboxGroup } from 'react-checkbox-context';

<CheckboxGroup name="fruits" values={['kiwi', 'pineapple']} onChange={this.fruitsChanged}>
  <Checkbox value="kiwi" /> Kiwi
  <Checkbox value="pineapple" /> Pineapple
  <Checkbox value="watermelon" /> Watermelon
</CheckboxGroup>
```

Since this component uses React's Context API, `<Checkbox>` elements can by anywhere inside of a `<CheckboxGroup>` and **do not** have to be a direct descendant! So this is easily possible **without** having to specify any `checkboxDepth` props or the like:

```js
<CheckboxGroup name="frameworks" onChange={(selectedValues) => { console.log(selectedValues); }}>
  <p>
    <label htmlFor="react">
      <Checkbox value="react" id="react" /> React
    </label>
  </p>
  <p>
    <label htmlFor="vue">
      <Checkbox value="vue" id="vue" /> Vue
    </label>
  </p>
</CheckboxGroup>
```

**Attention:** When migrating from `react-checkbox-group` please note that the prop name to pass the values to a `CheckboxGroup` is named `values` instead of `value` since it's an array and as such sounds more logical to me to be plural.

## Props

### `<CheckboxGroup />`

| Prop  | Type | Description  |
|-|-|-|
| `onChange` | `(values: Array<string>, originalEvent: SyntheticEvent<HTMLInputElement>) => void` | Will be called on every time a checkbox changes it's state. |
| `name` | `string` | Name for all checkboxes within one `<CheckboxGroup>` |
| `values` | `Array<string>` | Values of the `<Checkbox>` elements marked as `checked` |

Status of checkboxes (checked/unchecked) can be controlled from outside by passing new values to `<CheckboxGroup>` (e.g. `<CheckboxGroup values={this.state.checkedItems} />`).

### `<Checkbox />`

The `Checkbox` component passes all of its props the the underlying `<input type="checkbox" />` element. All valid HTML attributes can be used with the exception of `checked`, `name`, `onChange` as they will be set by the parent `<CheckboxGroup>` component.

## Todo

- Add more tests, especially with Enzyme to be able to check if `onChange` events are fired correctly.

## License

MIT.
