# Prompt

v1.0.0

A web app notification plugin to easily integrate and get going.

[Demo](https://anistark.github.io/prompt/)

Documentation:

Install: `npm install promptjs`

Usage:

Import both these files on client side:
```
node_modules/promptjs/dist/prompt.js
node_modules/promptjs/dist/prompt.css
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
