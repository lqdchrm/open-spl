'use strict';
var uuid = require('node-uuid'),
    Formula = require('../logic/formula');

var Constraint = function (formulaText, id) {
	this._id = id || uuid.v4();
	this._formulaText = formulaText;

	this._dirty = true;
	this._formula = null;

	this.compile();
};

Constraint.prototype.formulaText = function (formulaText, compile) {
	if (formulaText) {
		this._formulaText = formulaText;
		this._dirty = true;
		if (compile)
			this.compile();
	} else {
		return this._formulaText;
	}
};

Constraint.prototype.compile = function () {
	this._formula = Formula.TXT(this._formulaText);
	this._dirty = false;
}

module.exports = Constraint;
