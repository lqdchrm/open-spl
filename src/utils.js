'use strict';

module.exports = {
    args2arr: function () {
        return Array.prototype.slice.call(arguments);
    }
};