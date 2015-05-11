'use strict';
var uuid = require('node-uuid');

var Feature = function (name, id) {
	this._id = id || uuid.v4();
	this.name = name;
};

module.exports = Feature;
