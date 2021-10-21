const Jasmine = require('jasmine');
const { JSDOM } = require('jsdom');

const jasmine = new Jasmine();

const { window } = new JSDOM('<!doctype html><html><body></body></html>');

global.window = window;
window.Object = Object;

jasmine.loadConfig({
    spec_dir: 'test',
    spec_files: ['spec.js']
});

jasmine.execute();
