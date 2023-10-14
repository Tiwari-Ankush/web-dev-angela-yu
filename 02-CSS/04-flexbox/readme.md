FLEXBOX:
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

flexbox game>>
https://appbrewery.github.io/flexboxfroggy/

display flex:

The `display: flex;` property in CSS is used to create a flex container that allows you to control the layout and alignment of its child elements in a flexible manner. There is also `display: inline-flex;` for creating an inline-level flex container. Here's an explanation of these two values:

1. **`display: flex;`**:
   - This value makes the element a block-level flex container, which means it takes up the full width of its parent container.
   - Child elements are positioned horizontally (in a row) by default.
   - You can use properties like `justify-content` and `align-items` to control the alignment and spacing of child elements.

   ```css
   .flex-container {
     display: flex;
     justify-content: space-between; /* Space items evenly along the main axis */
     align-items: center; /* Center items along the cross axis */


     <!-- gap:20px; --> it also used there
   }
   ```

2. **`display: inline-flex;`**:
   - This value creates an inline-level flex container, allowing elements to flow inline within text content.
   - Child elements are still positioned horizontally by default, but they respect the surrounding text flow.
   - It's useful for creating inline flex elements within paragraphs or text.

   ```css
   .inline-flex-container {
     display: inline-flex;
     align-items: center; /* Center items along the cross axis */
   }
   ```

Both `display: flex;` and `display: inline-flex;` are essential for building flexible and responsive layouts. The choice between them depends on whether you want the flex container to behave as a block-level or inline-level element in the document flow.





FLEX DIRECTION. LAYOUT, SIZING

1.**Flex direction**
here's an explanation of flex-direction, a common layout structure, and flex sizing using CSS flexbox:

1. flex-direction: This property determines the direction in which flex items are laid out within a flex container. It can take values like row, row-reverse, column, and column-reverse.


Certainly, here's a code example for different `flex-direction` values in CSS:

```html
<div class="flex-container">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
</div>
```

**Horizontal Layout (Default - `flex-direction: row;`):**

```css
.flex-container {
  display: flex;
  flex-direction: row;
}
```

**Horizontal Layout in Reverse (`flex-direction: row-reverse;`):**

```css
.flex-container {
  display: flex;
  flex-direction: row-reverse;
}
```

**Vertical Layout (`flex-direction: column;`):**

```css
.flex-container {
  display: flex;
  flex-direction: column;
}
```

**Vertical Layout in Reverse (`flex-direction: column-reverse;`):**

```css
.flex-container {
  display: flex;
  flex-direction: column-reverse;
}
```

In these examples:

- `.flex-container` creates a flex container.
- `flex-direction` is set to `row`, `row-reverse`, `column`, or `column-reverse` to change the layout direction.
- The `.flex-item` elements are the flex items within the container.

You can choose the appropriate `flex-direction` value to achieve the desired layout for your flex container, whether it's horizontal or vertical, and whether the order is reversed or not.



**2. Flex Layout Structure:**

```css
.flex-container {
  display: flex;
  flex-direction: row; /* Items are laid out in a row (default) */
}
```

- The `.flex-container` is a flex container with the default `flex-direction` set to `row`, creating a horizontal layout.

**3. Flex Sizing:** The `flex` property controls the flexibility and size of flex items.

```css
.flex-item {
  flex: 1; /* Item is flexible and shares available space equally */
  /* Additional styling */
}
```

- The `.flex-item` is set to `flex: 1;`, making it flexible and allowing it to share available space equally with other flex items.

This example demonstrates the default `row` direction and equal sharing of space among flex items. You can change the `flex-direction` to achieve different layouts (e.g., `column` for a vertical layout) and adjust the `flex` property to control item sizing and flexibility. Flexbox is a versatile tool for creating responsive and dynamic layouts in CSS.



**flexbox sizing**
Flex sizing in CSS flexbox is achieved by using the `flex` property, which allows you to control how much space each flex item should take up within a flex container. The `flex` property consists of three values: `flex-grow`, `flex-shrink`, and `flex-basis`. Here's a detailed explanation with code:

```css
.flex-item {
  flex: <flex-grow> <flex-shrink> <flex-basis>;
}
```

- `flex-grow`: This value determines how much an item should grow if there's extra space available in the flex container. It's a unitless number, and items with a higher `flex-grow` value grow more.
- `flex-shrink`: This value determines how much an item should shrink if there's not enough space in the container. It's also a unitless number, and items with a higher `flex-shrink` value shrink more.
- `flex-basis`: This value sets the initial size of the item before distribution. You can specify it using percentages, pixels, or other length units.

Here's a more detailed code example:

```html
<div class="flex-container">
  <div class="flex-item" style="flex: 1 1 200px;">Item 1</div>
  <div class="flex-item" style="flex: 2 1 100px;">Item 2</div>
  <div class="flex-item" style="flex: 1 2 150px;">Item 3</div>
</div>
```

In this example:

- `.flex-item` elements have different `flex` values:
  - The first item (`Item 1`) has `flex: 1 1 200px;`, meaning it can grow and shrink equally and starts with a base size of 200px.
  - The second item (`Item 2`) has `flex: 2 1 100px;`, indicating it can grow twice as much as it can shrink and starts with a base size of 100px.
  - The third item (`Item 3`) has `flex: 1 2 150px;`, meaning it can shrink twice as much as it can grow and starts with a base size of 150px.

These values allow you to control how items within the flex container respond to changes in available space. Items with higher `flex-grow` values will expand more when there's extra space, and items with higher `flex-shrink` values will shrink more when space is limited. The `flex-basis` value sets the initial size for each item.



**FLEX-GROW AND FLEX-SHRINK**

exercise link >>
https://appbrewery.github.io/flexbox-sizing-exercise/

Certainly, here's an example that demonstrates how to use `flex-grow` and `flex-shrink` in CSS flexbox:

```html
<div class="flex-container">
  <div class="flex-item item1">Item 1</div>
  <div class="flex-item item2">Item 2</div>
  <div class="flex-item item3">Item 3</div>
</div>
```

```css
.flex-container {
  display: flex;
}

.flex-item {
  flex-basis: 100px; /* Initial size for all items */
  padding: 10px;
  margin: 5px;
  border: 1px solid #333;
}

.item1 {
  flex-grow: 1; /* This item can grow */
  flex-shrink: 1; /* This item can shrink */
  background-color: lightblue;
}

.item2 {
  flex-grow: 2; /* This item can grow twice as much */
  flex-shrink: 1; /* This item can shrink */
  background-color: lightcoral;
}

.item3 {
  flex-grow: 1; /* This item can grow */
  flex-shrink: 2; /* This item can shrink twice as much */
  background-color: lightgreen;
}
```

In this example:

- The `.flex-container` is a flex container that arranges the child elements in a row (the default `flex-direction`).
- Each `.flex-item` has an initial size of 100px (`flex-basis`) and some padding and margin.
- The `flex-grow` property determines how much an item can grow. In this example, `item1` can grow, `item2` can grow twice as much, and `item3` can grow. 
- The `flex-shrink` property controls how much an item can shrink. `item1` can shrink, `item2` can shrink, and `item3` can shrink twice as much.
- The `background-color` is set to distinguish each item visually.

With these settings, when there is extra space, `item2` will grow twice as much as the other items, and when space is limited, `item3` will shrink twice as much as the others. This demonstrates the use of `flex-grow` and `flex-shrink` in flexbox layouts.












