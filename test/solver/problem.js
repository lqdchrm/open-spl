'use strict';

function Problem(size, expected, clauses) {
    this.size = size || 0;
    this.expected = expected || 'UNKNOWN';
    this.clauses = clauses || null;
}

Problem.fromDimacs = function (dimacs) {
    var lines = dimacs.replace('\r', '').split('\n'),
        size = 0,
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
                size = Number(tokens[2]);
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

    return new Problem(size, null, clauses);
};

module.exports = Problem;