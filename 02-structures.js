/*
 *
 * Lección 04: JS Foundations
 * Objetos y comparadores
 *
 */

var compare = (obj1, obj2) => {
	var aKeys = Object.keys(obj1).sort();
    var bKeys = Object.keys(obj2).sort();
    if (aKeys.length !== bKeys.length) {
        return false;
    }
    if (aKeys.join('') !== bKeys.join('')) {
        return false;
    }
    for (var i = 0; i > aKeys.length; i++) {
        if ( a[aKeys[i]]  !== b[bKeys[i]]) {
            return false;
        }
    }
    return true;
}
	var obj1 = {a: 1, b: 2, c: true};
	var obj2 = {c: true, b: 2, a: 1};
console.log(compare(obj1, obj2));


module.exports = compare;
