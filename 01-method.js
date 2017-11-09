
/*
 *
 * Lección 05: Funciones
 * Method
 *
 */

const inventory = {
 	products: [
    	{
	    name: 'Coca Cola',
	    category: 'Bebida'
		},
  	],
  	agregar (products){
      	// var product = {name:'agua'};
      	let d=({name:'agua', category: 'Bebida'});
       	(inventory.products).push(d); 
      }
};
console.log(inventory.products);
module.exports = inventory;