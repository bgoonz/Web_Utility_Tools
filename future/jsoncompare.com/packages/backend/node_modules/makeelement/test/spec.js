const makeElement = require('../makeelement');

describe('makeElement', () => {
    it('creates element', () => {
        expect(makeElement('div').tagName).toEqual('DIV');
    });

    it('creates element even if tagName isn\'t given', () => {
        expect(makeElement().tagName).toEqual('DIV');
    });

    it('adds a property', () => {
        expect(makeElement('div', {
            className: 'foobar'
        }).className).toEqual('foobar');
    });

    it('creates childen', () => {
        const element = makeElement('div', {
            children: [{
                tagName: 'span'
            },
            window.document.createElement('q')
            ]
        });

        expect(element.children[0].tagName).toEqual('SPAN');
        expect(element.children[1].tagName).toEqual('Q');
    });

    it('creates childNodes', () => {
        const element = makeElement('div', {
            childNodes: [{
                tagName: 'span'
            },
            window.document.createElement('q'),
            window.document.createTextNode('foo')
            ]
        });

        expect(element.childNodes[0].tagName).toEqual('SPAN');
        expect(element.childNodes[1].tagName).toEqual('Q');
        expect(element.childNodes[2].textContent).toEqual('foo');
    });

    it('adds attribute', () => {
        expect(makeElement('div', {
            attributes: {
                foo: 'bar'
            }
        }).getAttribute('foo')).toEqual('bar');
    });

    it('allows to pass object with tagName property', () => {
        expect(makeElement({
            tagName: 'div'
        }).tagName).toEqual('DIV');
    });

    it('extends style object', () => {
        expect(makeElement('div', {
            style: {
                position: 'absolute'
            }
        }).style.position).toEqual('absolute');
    });

    it('extends dataset object', () => {
        expect(makeElement('div', {
            dataset: {
                foo: 'bar'
            }
        }).dataset.foo).toEqual('bar');
    });
});
