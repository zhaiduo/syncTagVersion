'use strict';

var lib = require('../lib.js');

var chai = require("chai");
chai.should();
var expect = chai.expect;

describe("test getLastVersion:", function() {
    it('OK', function() {
        expect(lib.getLastVersion(['v3.2.1', 'v1.3.4', ''])).equal('3.2.1');
        expect(lib.getLastVersion(['v0.2.1', 'v0.3.4', ''])).equal('0.3.4');
        expect(lib.getLastVersion(['v0.0.4', 'v0.0.2', ''])).equal('0.0.4');
        expect(lib.getLastVersion(['v2.2.0', 'v1.3.4', 'v0.2.1', 'v0.3.4', 'v0.0.4', 'v0.0.2', ''])).equal('2.2.0');
    });
});

