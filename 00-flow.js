/*
 *
 * Lección 04: JS Foundations
 * Control Flow
 *
 */

var powerOfTwo = number => {
	var base=2;
	for(let i=1;i<number;i++){
		base*=2;
	}
	return base;
};
console.log(powerOfTwo(10))
module.exports = powerOfTwo(10);
