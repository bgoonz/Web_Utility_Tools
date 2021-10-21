# matreshka-binder-codemirror [![npm version](https://badge.fury.io/js/matreshka-binder-codemirror.svg)](https://badge.fury.io/js/matreshka-binder-codemirror) [![Build Status](https://travis-ci.org/matreshkajs/matreshka-binder-codemirror.svg?branch=master)](https://travis-ci.org/matreshkajs/matreshka-binder-codemirror) [![Coverage Status](https://coveralls.io/repos/github/matreshkajs/matreshka-binder-codemirror/badge.svg?branch=master)](https://coveralls.io/github/matreshkajs/matreshka-binder-codemirror?branch=master)
> [CodeMirror](http://codemirror.net/) binder creator for Matreshka.js

The binder creator returns a binder which initializes and binds CodeMirror instance created with ``fromTextArea`` function to a property.

## Usage
In **browser environment** (or whatever environment where ``Matreshka`` is global variable)  ``Matreshka.binders`` namespace is extended.
```html
<script src="path/to/matreshka-binder-codemirror.min.js"></script>
```

```js
const { codeMirror } = Matreshka.binders;
this.bindNode('code', textarea, codeMirror());

// if you don't want to create the variable
this.bindNode('code', textarea, Matreshka.binders.codeMirror());

obj.code = 'alert("Hello World!");';
```

The bundle can be downloaded at [gh-pages branch](https://github.com/matreshkajs/matreshka-binder-codemirror/tree/gh-pages)

-------------

In **CJS environment** ``Matreshka.binders`` is not extended.

```
npm install --save matreshka-binder-codemirror
```

```js
const codeMirror = require('matreshka-binder-codemirror');

// ...

this.bindNode('code', textarea, codeMirror());
```


### Configuration

The function accepts one argument: configuration object which is passed into internal call of ``CodeMirror.fromTextArea``. Read the CodeMirror documentation for more info.

```js
this.bindNode('code', textarea, codeMirror({
    lineNumbers: true,
    mode: 'htmlmixed'
}));
```
