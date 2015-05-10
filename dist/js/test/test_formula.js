/// <reference path="../src/formula.js" />

var expect = require('chai').expect,
    formula = require('../src/formula'),
    AND = formula.and,
    OR = formula.or,
    NOT = formula.not;

describe('formula', function() {
    
    describe("and()", function () {
        it('conjunction of formulas', function () {
            var expr = AND('a', 'b', 'c');
    
            expect(expr).to.be.a('object');
            expect(expr).to.have.property('and');
            expect(expr.and).to.be.a('array');
            expect(expr.and).to.have.length(3);
        });
    });

    describe("or()", function () {
        it('disunction of formulas', function () {
            var expr = OR('a', 'b', 'c');
    
            expect(expr).to.be.a('object');
            expect(expr).to.have.property('or');
            expect(expr.or).to.be.a('array');
            expect(expr.or).to.have.length(3);
        });
    });

    describe("not()", function () {
        it('negation of formula', function () {
            var expr = NOT('a');
    
            expect(expr).to.be.a('object');
            expect(expr).to.have.property('not');
            expect(expr.not).to.be.a('string');
            expect(expr.not).to.equal('a');
        });
    });

});
