# Prompt

![GitHub package.json version](https://img.shields.io/github/package-json/v/anistark/prompt) ![npm](https://img.shields.io/npm/v/promptjs)
![GitHub](https://img.shields.io/github/license/anistark/prompt)

A web app notification plugin to easily integrate and get going.

<img src="https://anistark.github.io/prompt/img/prompt.png" alt="Prompt" height="100"/>

[Demo](https://anistark.github.io/prompt/)

## Documentation:

### Install: `npm install promptjs --save`

### Update: `npm update promptjs --save`
Update to the latest version of the library to catch up with new features.

### Usage:

#### Import:

1. If you're running this on reactjs/vuejs/angular sort of framework, you can directly use require.
Alternatively, if you've browerify or requirejs in your project, you can import directly from `node_modules`:
```javascript
require('promptjs')
```
Don't forget to add the stylesheet:
```html
<link rel="stylesheet" href="/node_modules/promptjs/dist/prompt.css">
```

2. If not, copy them to your client side vendor directory like:
```
cp -r node_modules/promptjs statics/vendor/
```
where `statics` is my client side static directory (Yours might have some equivalent name. Add accordingly).
And then add these lines to your client side view or html file:
```html
<link rel="stylesheet" href="/static/vendor/promptjs/dist/prompt.css">
<script type="text/javascript" src="/static/vendor/promptjs/dist/prompt.js"></script>
```

#### Trigger:
```javascript
Prompt.create({
    title: "Title",
    text: "Text",
    type: "success",
    position: "top-right",
    timeout: "5000"  // 5s
});
```

#### Screenshot:
<img src="https://anistark.github.io/prompt/img/screenshot.png" alt="Screenshot" height="100"/>

***

Contributions Welcome.
Feel free to open an issue with a feature request or bug report and work on it. Assign it to yourself so that nobody else takes it up.

***

Inspired by [VanillaToasts](https://github.com/AlexKvazos/VanillaToasts).
