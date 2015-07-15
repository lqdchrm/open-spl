'use strict';

/**
 * @constructor
 * @param {number} numVars
 * @param {Array.<Array>} clauses
 * @param {boolean} satisfiable
 */
function Problem(numVars, clauses, satisfiable) {
    this.numVars = numVars || 0;
    this.clauses = clauses || [];
    this.satisfiable = satisfiable || null;
}

/**
 * creates a problem instance from a DIMACS string.
 * 
 * @param {string} dimacs DIMACS-string
 * @return {Problem}
 */
Problem.fromDimacs = function (dimacs) {
    var lines = dimacs.replace('\r', '').split('\n'),
        numVars = 0,
        clauses = [],
        clause,
        lit,
        i,
        tokens;

    lines.forEach(function (line) {
        tokens = line.trim().split(/[\s]+/);
        if (tokens.length > 0) {
            switch (tokens[0]) {
            case 'c': // skip comments
                break;
            case 'p': // parse problem, should be 'p cnf numVars numClauses'
                numVars = Number(tokens[2]);
                break;
            default:  // parse clause
                i = 0;
                clause = [];
                do {
                    lit = Number(tokens[i]);
                    if (lit !== 0) {
                        clause.push(lit);
                    }
                    i++;
                } while (lit !== 0 && i < tokens.length);

                clauses.push(clause);
                break;
            }
        }
    });

    return new Problem(numVars, clauses);
};

module.exports = Problem;