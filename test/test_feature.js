/// <reference path="../src/feature.js" />

var expect = require('chai').expect,
    Feature = require('../src/feature');

describe('feature', function () {

    describe("new", function () {
        it('construct a feature', function () {
            var f = new Feature('root');
            console.log(JSON.stringify(f));
        });
    });
});
