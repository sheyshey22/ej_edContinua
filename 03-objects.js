/*
 *
 * Lección 04: JS Foundations
 * Objetos preconstruidos
 *
 */

var isNumber = (numberArray) => {
  	var str = ['3', '.4', '.','-10' '3+3',];
    var patt1 = [\.,]\s*[\.,]; 
    var result = str.match(patt1);
    document.getElementById("demo").innerHTML = result;
}
console.log(isNumber(['3', '0.4', '.','-10' '3+3',]))
module.exports = isNumber;
