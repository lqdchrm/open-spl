/// <reference path="../../src/fm/fm.js" />

var expect = require('chai').expect,
    FM = require('../../src/openspl').FM;

describe('feature model', function () {

    describe("new", function () {
        it('construct a feature model', function () {
            var fm = new FM(),
                car, engine, transmission,
                c1,
                config;

            fm.addFeature(
                car = new FM.Feature('car'),
                engine = new FM.Feature('engine'),
                transmission = new FM.Feature('transmission')
            ).addConstraint(
                c1 = new FM.Constraint('and(car, engine, transmission)')
            ).addConfig(
                config = new FM.Config('config')
                    .set(car, true)
                    .set(engine, true)
                    .set(transmission, false)
            );

            var result = fm.check(config);
            expect(result).to.equal(false);

            config.set(transmission, true);
            result = fm.check(config);
            expect(result).to.equal(true);
        });
    });
});
