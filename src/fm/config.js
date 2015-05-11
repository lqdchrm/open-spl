'use strict';
var uuid = require('node-uuid');

var Config = function(name, id) {
	this._id = id || uuid.v4();
	this.name = name;
	
	// map feature._id -> boolean
	this._values = {};
};

Config.prototype.set = function(feature, val) {
	this._values[feature._id] = val;
	return this;
}

Config.prototype.evalFunc = function(id) {
	return this._values[id];
};

module.exports = Config;