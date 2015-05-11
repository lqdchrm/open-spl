/// <reference path="../../src/fm/constraint.js" />

var expect = require('chai').expect,
    Constraint = require('../../src/fm/constraint');

describe('constraint', function () {

    describe("new", function () {
        it('construct a constraint', function () {
            var c = new Constraint('and(not(5), 6)');
        });
    });
});
