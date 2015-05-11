'use strict';

var Feature = require('./feature'),
    Constraint = require('./constraint'),
	Config = require('./config');

var FM = function () {
	this.features = {};
	this.constraints = {};
	this.configs = {};
};

FM.Feature = Feature;
FM.Constraint = Constraint;
FM.Config = Config;

FM.prototype.addFeature = function () {
	var features = Array.prototype.slice.call(arguments);
	features.forEach(function (f) {
		this.features[f._id] = f;
	}.bind(this));
	return this;
};

FM.prototype.addConstraint = function (constraint) {
	var constraints = Array.prototype.slice.call(arguments);
	constraints.forEach(function (c) {
		this.constraints[c._id] = c;
	}.bind(this));
	return this;
};

FM.prototype.addConfig = function (config) {
	var configs = Array.prototype.slice.call(arguments);
	configs.forEach(function (c) {
		this.configs[c._id] = c;
	}.bind(this));
	return this;
};

FM.prototype.check = function(config) {
	var result = true;

	for(var idx in this.constraints) {
		var c = this.constraints[idx];
		c.compile(this.features);
		result = result && c.isTrue(config);
	}
	
	return result;
};

module.exports = FM;