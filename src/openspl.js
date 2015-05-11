'use strict';

var Feature = require('./fm/feature'),
	Constraint = require('./fm/constraint'),
	formula = require('./logic/formula');

module.exports = {
	Feature: Feature,
	Constraint: Constraint,
	formula: formula
};
