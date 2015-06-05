'use strict';

var Formula = function (op, args) {
    this.op = op;
    this.args = args;
};

var _eval = function(expr, cb) {
    if (typeof(expr) === 'boolean')
        return expr;

    switch(expr.op) {
        case 'and':
            return expr.args.reduce(function(prev, cur) {
                return _eval(prev, cb) && _eval(cur, cb);
            }, true);
        case 'or':
            return expr.args.reduce(function(prev, cur) {
                return _eval(prev, cb) || _eval(cur, cb);
            }, false);
        case 'not':
            return !_eval(expr.args, cb);
        default:
            return cb(expr);
    }
};

Formula.prototype.eval = function(cb) {
    return _eval(this, cb);
};

Formula.AND = function () {
    return new Formula('and', Array.prototype.slice.call(arguments));
};

Formula.OR = function () {
    return new Formula('or', Array.prototype.slice.call(arguments));
};

Formula.NOT = function (expr) {
    return new Formula('not', expr);
};

Formula.TXT = function (txt) {
    var _txt = txt.replace('and(', 'Formula.AND(')
        .replace('or(', 'Formula.OR(')
        .replace('not(', 'Formula.NOT(');

    return eval(_txt);
};

module.exports = Formula;
