
```
# EJS (Embedded JavaScript) - Quick Guide

## How does EJS work?

EJS (Embedded JavaScript) is a templating language that allows embedding JavaScript code within HTML markup. It helps generate dynamic content by executing JavaScript code on the server-side.

## What are EJS tags?

EJS uses special tags to execute JavaScript code within HTML. The common EJS tags are:

- `<%= variable %>`    >> **JS OUTPUT**
- `<% console.log("hello") %>`    >> **JS EXECUTE**
- `<%- <h1> Hello </h1> %>`    >> **RENDER HTML**
- `<%  <%% %%>  %>`    >> **SHOW `<%` OR `%>`**
- `<%#  This is a comment  %>`    >> **STOP EXECUTION**
- `<%- include("<file name>") %>`    >> **INSERT ANOTHER EJS FILE**

## How to use all of these EJS tags?

### Example 1: JS OUTPUT
```ejs
<%= user.name %>
```

### Example 2: JS EXECUTE
```ejs
<% console.log("hello") %>
```

### Example 3: RENDER HTML
```ejs
<%- "<h1>Hello</h1>" %>
```

### Example 4: SHOW `<%` OR `%>`
```ejs
<% if (condition) { %>
  Content to show
<% } %>
```

### Example 5: STOP EXECUTION
```ejs
<%# This is a comment %>
```

### Example 6: INSERT ANOTHER EJS FILE
```ejs
<%- include("header.ejs") %>
```

## How can we parse data to EJS templates?

To parse data to EJS templates, you can pass an object as a second parameter when rendering the template.

```javascript
const data = { title: "Dynamic Title" };
res.render("template.ejs", data);
```

In the EJS template:

```ejs
<h1><%= title %></h1>
```

## Explain in short, EJS partials and layouts?

EJS partials and layouts are mechanisms to modularize and reuse code in EJS templates.

- **Partials:** Partial views are smaller, reusable components that can be included in multiple EJS files using the `<%- include("partial.ejs") %>` syntax.

- **Layouts:** Layouts provide a consistent structure for your application. They allow you to define a common structure (header, footer, etc.) that is shared across multiple views.

## How to access static files?

To access static files (like stylesheets, images, etc.), use the `express.static` middleware in your Express application.

```javascript
app.use(express.static("public"));
```

This assumes your static files are in a folder named "public" in the root directory. Now, you can reference static files in your EJS templates:

```html
<link rel="stylesheet" href="/styles/style.css">
```