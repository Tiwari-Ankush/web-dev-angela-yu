ADVANCE CSS >> DISPLAY,FLOAT,MEDIA QUERY


CSS display:
https://appbrewery.github.io/css-display/

Display properties
Certainly, here are the `display` property examples for `block`, `inline`, `inline-block`, and `none` with code:

1. **`display: block;`**
   - Renders elements as block-level, taking up the full width and starting on a new line.

```css
.block-element {
  display: block;
  width: 200px;
  background-color: #ffcc00;
  border: 1px solid #000;
  padding: 10px;
}
```

```html
<div class="block-element">
  This is a block element.
</div>
```

2. **`display: inline;`**
   - Renders elements as inline, only taking up as much width as necessary.

```css
.inline-element {
  display: inline;
  background-color: #66ccff;
  padding: 5px;
  margin-right: 10px;
}
```

```html
<span class="inline-element">Inline</span>
<span class="inline-element">elements</span>
<span class="inline-element">in a line.</span>
```

3. **`display: inline-block;`**
   - Combines features of block and inline elements, allowing inline elements with block-level styling.

```css
.inline-block-element {
  display: inline-block;
  width: 100px;
  background-color: #99ff99;
  padding: 5px;
  margin-right: 10px;
}
```

```html
<div class="inline-block-element">Inline-block</div>
<div class="inline-block-element">elements</div>
<div class="inline-block-element">with styling.</div>
```

4. **`display: none;`**
   - Hides the element, making it entirely invisible and inaccessible.

```css
.hidden-element {
  display: none;
}
```

```html
<p>This is a visible paragraph.</p>
<p class="hidden-element">This paragraph is hidden.</p>
```

These code examples demonstrate how the `display` property affects the rendering of elements in CSS, either as block-level, inline, inline-block, or completely hidden (`none`).




FLOAT property in CSS :
    wrapping text using float and clear
The `float` property in CSS is used to specify whether an element should be floated to the left or right, allowing text and inline elements to wrap around it. Here's an example with the `float` property:

```css
/* CSS */
.float-example {
  float: left; /* or 'right' */
  width: 150px; /* Optional width for floated element */
  margin-right: 20px; /* Optional margin to create spacing */
}
```

```html
<!-- HTML -->
<p>This is some text that will wrap around the floated element.</p>
<div class="float-example">
  <img src="your-image.jpg" alt="Floating Image">
</div>
<p>Text continues to wrap around the floated element.</p>
```

In this example, the `float` property is applied to the `.float-example` class, causing the image to be floated to the left. Text and other content flow around it, creating a wrapping effect. You can use `float` to create multi-column layouts and more complex text/image arrangements in web design.




CREATION OF RESPONSIVE WEBSITES:
Certainly, here are some key elements for creating responsive websites:

1. **Media Queries:**
   - Use CSS media queries to apply different styles or layouts based on the screen's width and height.
   - Adjust styles for various breakpoints to optimize the website for different devices.

   ```css
   @media (max-width: 768px) {
     /* Styles for screens up to 768px wide (e.g., tablets) */
   }
   ```

2. **CSS Grid:**
   - Utilize CSS Grid for creating complex, grid-based layouts that adapt to different screen sizes.
   - Define responsive grid templates and positioning for your content.

   ```css
   .container {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   }
   ```

3. **CSS Flexbox:**
   - Use Flexbox for flexible and dynamic layouts, especially for arranging content within a container.
   - It's great for aligning elements both horizontally and vertically.

   ```css
   .flex-container {
     display: flex;
     justify-content: space-between;
     align-items: center;
   }
   ```

4. **External Frameworks like Bootstrap:**
   - Leverage responsive front-end frameworks like Bootstrap to build responsive websites more efficiently.
   - These frameworks come with pre-designed responsive components and grids.

   ```html
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
   ```

By incorporating media queries, CSS Grid, CSS Flexbox, or using external frameworks like Bootstrap, you can create responsive web designs that adapt to various screen sizes and deliver a consistent user experience.




Media Queries:
Adding breakpoints to define responsive layouts
Certainly, here's an example of a simple HTML and CSS structure with a media query:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Background Color</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Responsive Background Color</h1>
    <p>This is a simple example of a media query.</p>
</body>
</html>
```

```css
/* styles.css */

/* Default styles for screens wider than 768px */
body {
  background-color: lightblue;
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
}

/* Media query for screens 768px wide or narrower */
@media (max-width: 768px) {
  body {
    background-color: lightcoral;
  }
}
```

In this example:

- The HTML file includes a basic structure with a title, a heading, and a paragraph.
- The CSS file (styles.css) sets the default background color of the `body` element to `lightblue`.
- A media query is used to change the background color to `lightcoral` when the screen width is 768 pixels or narrower.

When you resize the browser window to a width of 768 pixels or less, the background color of the page will change to lightcoral, thanks to the media query. This demonstrates a simple example of responsive design using HTML and CSS.





