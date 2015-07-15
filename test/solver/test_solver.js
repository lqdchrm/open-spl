/// <reference path="../../src/solver/solver.js" />
'use strict';

var expect = require('chai').expect,
    Problems = require('./problems'),
    Solver = require('../../src/solver/solver');

describe('solver', function () {
    describe("solve()", function () {
        var idx, problem;
        for (idx in Problems) {
            problem = Problems[idx];
            it('check problem ' + idx + ' for expected value: ' + problem.expected, function () {
                var result = Solver.solve(problem);
            
                switch (problem.expected) {
                case 'SAT':
                    expect(result).to.equal(true);
                    break;
                case 'UNSAT':
                    expect(result).to.equal(false);
                    break;
                }
            });
        }
    });
});
