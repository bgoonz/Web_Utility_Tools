# matreshka-parse-form [![npm version](https://badge.fury.io/js/matreshka-parse-form.svg)](https://badge.fury.io/js/matreshka-parse-form) [![Coverage Status](https://coveralls.io/repos/github/matreshkajs/matreshka-parse-form/badge.svg?branch=master)](https://coveralls.io/github/matreshkajs/matreshka-parse-form?branch=master) [![Build Status](https://travis-ci.org/matreshkajs/matreshka-parse-form.svg?branch=master)](https://travis-ci.org/matreshkajs/matreshka-parse-form)

The function binds named HTML form fields (input, select, textarea etc) contained at given HTML form to corresponding properties.

```html
<form class="my-form">
    <input type="text" value="foo" name="x">
</form>
```

```js
const object = {};
parseForm(object, '.my-form');

// ...
console.log(object.x); // 'foo'
object.x = 'bar'; // changes input value to 'bar'
```

## Usage

In **browser environment** (or whatever environment where ``Matreshka`` is global variable)  ``Matreshka`` is extended.
```html
<script src="path/to/matreshka-parse-form.min.js"></script>
```

```js
Matreshka.parseForm(object, form);
```

The bundle can be downloaded at [gh-pages branch](https://github.com/matreshkajs/matreshka-parse-form/tree/gh-pages)

-------------

In **CJS environment** ``Matreshka`` is not extended.

```
npm install --save matreshka-parse-form
```

```js
const parseForm = require('matreshka-parse-form');
```


## API

The function accepts 4 arguments:
- ``object`` - an object (required)
- ``form`` - a selector, DOM node etc. of given form (custom selectors ``:sandbox`` and ``:bound(XXX)`` also acceptable) (required)
- ``callback`` - a function which will be called on every found field; accepts field name and field element itself
- ``eventOptions`` - event options which will be passed to internal call of ``bindNode``.

Returns: parsed form element.


The third argument is usable when ``parseForm`` is used with ``Matreshka.Object``. You can call ``addDataKeys`` method there.
```js
const form = parseForm(this, ':sandbox .foo', key => this.addDataKeys(key), {
    getValueOnBind: false
})
```
