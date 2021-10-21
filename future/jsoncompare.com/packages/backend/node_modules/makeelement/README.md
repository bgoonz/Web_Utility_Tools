# makeElement [![npm version](https://badge.fury.io/js/makeelement.svg)](https://badge.fury.io/js/makeelement) [![Build Status](https://travis-ci.org/finom/makeelement.svg?branch=master)](https://travis-ci.org/finom/makeelement)

> Compact, fast, dependency-free function to use instead of ``document.createElement``

```
npm install --save makeelement
```

```js
const makeElement = require('makeelement');
```

It also creates a global variable ``makeElement`` in non-CJS environment.

```html
<script src="makeelement.js"></script>
<script>
const element = makeElement('div');
</script>
```

## Usage

``makeElement`` accepts a tag name and its properties or properties object only which can include ``tagName`` property (``div`` by default).

```js
const element = makeElement('div', {
    className: 'foo',
    hidden: false
});
```

```js
const element = makeElement({
    tagName: 'div'
    className: 'foo',
    hidden: false
});
```

The function also allows to define ``attributes``, ``children``, ``style`` and ``dataset`` simultaneously. ``children``, in their turn, may include their own ``children`` and its item can also be a DOM node.

```js
const element = makeElement('div', {
    attributes: {
        foo: 'a',
        bar: 'b'
    },
    children: [{
        tagName: 'div',
        className: 'child-1'
    }, {
        tagName: 'div',
        className: 'child-2',
        children: [{
          tagName: 'div',
          className: 'grand-child',
          children: [{
            tagName: 'div',
            className: 'grand-grand-child',
          }]
        }]
    }],
    dataset: {
        foo: 'a',
        bar: 'b'
    },
    style: {
        position: 'absolute',
        backgroundColor: 'red'
    }
});
```
