/*
 *
 * Lección 04: JS Foundations
 * Invertir Arreglo
 *
 */

var invert = array => {
	var newArray=[];
	for (var i = array.length - 1; i >= 0; i--) {
		newArray.push(array[i]);
	};
	return newArray;
}
	
console.log(invert([1,2,3,4]))

module.exports = invert;
