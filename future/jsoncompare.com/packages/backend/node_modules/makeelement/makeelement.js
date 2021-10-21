function makeElement(tagName, props) {
    const { document, Node } = window;
    const { keys: objectKeys } = Object;
    // allow to pass tagName as a property of props instead of the first argument
    if (typeof tagName === 'object') {
        props = tagName;
        ({ tagName } = props);
    }

    const el = document.createElement(tagName || 'div');

    if (props) {
        for (let i = 0, keys = objectKeys(props); i < keys.length; i++) {
            const key = keys[i];
            let value = props[key];

            // set attributes
            if (key === 'attributes' && typeof value === 'object') {
                for (let j = 0, attrsKeys = objectKeys(value); j < attrsKeys.length; j++) {
                    const attrName = attrsKeys[i];
                    const attrValue = value[attrName];
                    el.setAttribute(attrName, attrValue);
                }
            // create children
            } else if ((key === 'children' || key === 'childNodes') && value) {
                value = [].slice.call(value);
                for (let j = 0; j < value.length; j++) {
                    const item = value[j];
                    const child = item instanceof Node ? item : makeElement(item);
                    el.appendChild(child);
                }
            // extend object (eg dataset or style)
            } else if (el[key] && typeof el[key] === 'object' && typeof value === 'object') {
                for (let j = 0, objKeys = objectKeys(value); j < objKeys.length; j++) {
                    const objKey = objKeys[j];
                    const objValue = value[objKey];
                    el[key][objKey] = objValue;
                }
            // just set a property
            } else if (key !== 'tagName') {
                el[key] = value;
            }
        }
    }

    return el;
}

if (typeof module === 'object') {
    module.exports = makeElement;
}
