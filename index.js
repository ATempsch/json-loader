/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var encoding = require("encoding");

module.exports = function(source) {
	this.cacheable && this.cacheable();
	var value = typeof source === "string" ? JSON.parse(encoding.convert(source, 'Latin_1')) : source;
	this.value = [value];
	return "module.exports = " + JSON.stringify(value, undefined, "\t") + ";";
}
