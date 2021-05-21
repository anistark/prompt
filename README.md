# Prompt

![GitHub package.json version](https://img.shields.io/github/package-json/v/anistark/prompt) ![npm](https://img.shields.io/npm/v/promptjs)
![GitHub](https://img.shields.io/github/license/anistark/prompt)

A web app notification plugin to easily integrate and get going.

<img src="https://anistark.github.io/prompt/img/prompt.png" alt="Prompt" height="100"/>

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

Screenshot:
<img src="https://anistark.github.io/prompt/img/screenshot.png" alt="Screenshot" height="100"/>



Inspired by [VanillaToasts](https://github.com/AlexKvazos/VanillaToasts).
