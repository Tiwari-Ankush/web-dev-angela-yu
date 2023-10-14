FLEXBOX:
https://css-tricks.com/snippets/css/a-guide-to-flexbox/



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






