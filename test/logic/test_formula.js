/// <reference path="../../src/logic/formula.js" />

var expect = require('chai').expect,
    Formula = require('../../src/logic/formula'),
    AND = Formula.AND,
    OR = Formula.OR,
    NOT = Formula.NOT,
    TXT = Formula.TXT;

describe('formula', function() {
    
    describe("and()", function () {
        it('conjunction of formulas', function () {
            var expr = AND('a', 'b', 'c');
    
            expect(expr).to.be.a('object');
            expect(expr).to.have.property('op');
            expect(expr.op).to.equal('and');
            
            expect(expr).to.have.property('args');
            expect(expr.args).to.be.a('array');
            expect(expr.args).to.have.length(3);
        });
    });

    describe("or()", function () {
        it('disunction of formulas', function () {
            var expr = OR('a', 'b', 'c');
    
            expect(expr).to.be.a('object');
            expect(expr).to.have.property('op');
            expect(expr.op).to.equal('or');
            
            expect(expr).to.have.property('args');
            expect(expr.args).to.be.a('array');
            expect(expr.args).to.have.length(3);
        });
    });

    describe("not()", function () {
        it('negation of formula', function () {
            var expr = NOT('a');
    
            expect(expr).to.be.a('object');
            expect(expr).to.have.property('op');
            expect(expr.op).to.equal('not');
            
            expect(expr).to.have.property('args');
            expect(expr.args).to.be.a('string');
            expect(expr.args).to.equal('a');

        });
    });
    
    describe("txt()", function () {
        it('parsing of formula', function () {
            var expr = TXT('and(1, 2, 3)');
    
            expect(expr).to.be.a('object');
            expect(expr).to.have.property('op');
            expect(expr.op).to.equal('and');
            
            expect(expr).to.have.property('args');
            expect(expr.args).to.be.a('array');
            expect(expr.args).to.have.length(3);

        });
    });
    
    describe("eval()", function () {
        it('evaluation of formula', function () {
            var expr = TXT('and(not("a"), "b", "c")');

            var data = { "a": false, "b": true, "c": true };
            var fe = function(id) { return data[id]; }
            var val = expr.eval(fe);
            
            expect(val).to.equal(true);
            
            data["a"] = true;
            val = expr.eval(fe);
            expect(val).to.equal(false);
        });
    });    

});
