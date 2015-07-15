/// <reference path="../../src/solver/solver.js" />
'use strict';

var expect = require('chai').expect,
    Problems = require('./problems'),
    Solver = require('../../src/solver/solver');

describe('solver', function () {
    var idx;
    for (idx in Problems) {
        describe("solve()", function () {
            var problem = Problems[idx];
            it('check problem ' + idx + ' for expected value: ' + problem.satisfiable, function () {
                            
                var result = Solver.solve(problem);
            
                switch (problem.satisfiable) {
                case true:
                    expect(result.satisfiable).to.equal(true);
                    break;
                case false:
                    expect(result.satisfiable).to.equal(false);
                    break;
                }
            });
        });
    }
});
