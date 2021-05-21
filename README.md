# Prompt

v1.0.0

A web app notification plugin to easily integrate and get going.

![Prompt](https://anistark.github.io/prompt/img/prompt.png "Prompt")

[Demo](https://anistark.github.io/prompt/)

Documentation:

Install: `npm install promptjs --save`

Usage:

Import both these files on client side:
```html
<link rel="stylesheet" href="/node_modules/promptjs/dist/prompt.css">
<script src="/node_modules/promptjs/dist/prompt.js"></script>
```

Trigger from js:
```javascript
Prompt.create({
    title: "Title",
    text: "Text",
    type: "success",
    timeout: "5000"  // 5s
});
```


Inspired by [VanillaToasts](https://github.com/AlexKvazos/VanillaToasts).
