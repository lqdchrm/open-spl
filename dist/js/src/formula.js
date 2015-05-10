(function() {
    'use strict';

    var formula = {
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

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
        module.exports = formula;
    else
        window.formula = formula;
})();
