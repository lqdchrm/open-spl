/// <reference path="../../src/fm/feature.js" />

var expect = require('chai').expect,
    Feature = require('../../src/fm/feature');

describe('feature', function () {

    describe("new", function () {
        it('construct a feature', function () {
            var f = new Feature('root');
            console.log(JSON.stringify(f));
        });
    });
});
