/// <reference path="../src/fm/fm.js" />

var FM = require('../src/fm/fm');

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
	config = new FM.Config()
		.set(car, true)
		.set(engine, true)
		.set(transmission, false)
);

console.log(JSON.stringify(fm, null, '\t'));

var result = fm.check(config);
expect(result).to.equal(false);

config.set(transmission, true);
expect(result).to.equal(true);
