'use strict';
var uuid = require('node-uuid'),
    Formula = require('../logic/formula');

var Constraint = function (formulaText, id) {
	this._id = id || uuid.v4();
	this._formulaText = formulaText;

	this._dirty = true;
	this._formula = null;
};

Constraint.prototype.formulaText = function (formulaText) {
	if (formulaText) {
		this._formulaText = formulaText;
		this._dirty = true;
	} else {
		return this._formulaText;
	}
};

Constraint.prototype.compile = function (featureEnum) {
	if (this._dirty) {
		var formula = this._formulaText;
		if (featureEnum) {
			for (var idx in featureEnum) {
				var f = featureEnum[idx];
				formula = formula.replace('('+f.name+',', '(\''+f._id+'\',');
				formula = formula.replace(' '+f.name+',', ' \''+f._id+'\',');
				formula = formula.replace(' '+f.name+')', ' \''+f._id+'\')');
				formula = formula.replace('('+f.name+')', '(\''+f._id+'\')');
			}
		}
		
		this._formula = Formula.TXT(formula);
		this._dirty = false;
	}
}

Constraint.prototype.isTrue = function(config) {
	if (this._dirty) {
		throw 'constraint not compiled';
	}
	return this._formula.eval(config.evalFunc.bind(config));
}

module.exports = Constraint;
