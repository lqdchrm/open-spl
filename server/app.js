/// <reference path="../src/fm/constraint.js" />

var Constraint = require('../src/fm/constraint');

var c = new Constraint('and(not(5), 6)');
var e = function (id) {
	switch (id) {
		case 5: return true;
		case 6: return true;
	}
};

console.log(JSON.stringify(c, null, '\t'));
console.log(c._formula.eval(e));
