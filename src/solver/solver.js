'use strict';

var now = require('performance-now'),
    Problem = require('./problem'),
	Solver1 = require('./impl/solver1');

/**
 * SolverResult.
 *
 * @constructor
 * @param {object} solverImpl
 * @param {Problem} problem
 * @param {boolean} satisfiable true|false|null
 * @param {string} proof
 * @param {number} timeNeededInMs
 */
function SolverResult(solverImpl, problem, satisfiable, proof, timeNeededInMs) {
	this.solverImpl = solverImpl || null;
    this.problem = problem || null;
    
    this.satisfiable = satisfiable || null;
	this.proof = proof || null;
	this.timeNeededInMs = timeNeededInMs || null;
}

/**
 * Calls an implementation's solve method and returns a solver result object.
 * 
 * @param {object} solverImpl
 * @param {Problem} problem
 * @return {SolverResult}
 */
function solve(solverImpl, problem) {
    var result = new SolverResult(solverImpl, problem),
        start = now();

    result.satisfiable = solverImpl.solve(problem.numVars, problem.clauses);
    result.timeNeededInMs = (now() - start).toFixed(3);

    return result;
}

/**
 * solve function instantiated with solver impl
 *
 * @param {Problem} problem
 * @return {SolverResult}
 */
function exportSolve(problem) {
    return solve(Solver1, problem);
}

module.exports = {
    solve : exportSolve
};