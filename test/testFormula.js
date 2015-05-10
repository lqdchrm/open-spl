/// <reference path="../src/formula.js" />

var should = require('chai').should,
    formula = require('../src/formula');

describe("#and", function () {
    it('conjunction of formulas', function () {
        console.log(formula.and(formula.not('a'), formula.or('b', 'c')));
    });
});