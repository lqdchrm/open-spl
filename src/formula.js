'use strict';

module.exports = {
    and: function () {
        return { and: Array.prototype.slice.call(arguments) };
    },

    or: function () {
        return { or : Array.prototype.slice.call(arguments) };
    },

    not: function (expr) {
        return { not: expr };
    }
};
