/// <reference path='utils.js' />
'use strict';

var utils = require('../src/utils'),

    and = function () {
        return { and: utils.args2arr(arguments) };
    },

    or = function () {
        return { or : utils.args2arr(arguments) };
    },

    not = function (expr) {
        return { not: expr };
    };

module.exports = {
    and: and,
    or: or,
    not: not
};



