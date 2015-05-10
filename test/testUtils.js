/// <reference path="../src/utils.js" />

var should = require('chai').should,
    utils = require('../src/utils');

describe("#args2array", function () {
    it('converts arguments object to array', function () {
        var args = { '0': 'a', '1': 'b'};
        var arr = utils.args2arr(args);
    });
});