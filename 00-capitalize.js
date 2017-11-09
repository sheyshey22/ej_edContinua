/*
 *
 * Lección 05: Funciones
 * Capitalize
 *
 */
const capitalize = sentence => {
	var array = sentence.split(" ");
	var res =[];
	for (var i = 0; i < array.length; i++) {
		res[i]=(array[i]).charAt(0).toUpperCase()+(array[i]).slice(1);
	}
	return res.join(" ");
};
console.log(capitalize("hola mundo loco"));
module.exports = capitalize;

