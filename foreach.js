let comidas = ["Suchi","Brigadeiro","Pastel","Churrasco"]


/*Percorrer um array para cada elemento 
comidas.forEach((comidas) =>{
    console.log(comidas)
}) 
*/

/*ACRESCENTTAR UM ELEMENTO NO ARRAY
console.log(comidas)
Comidas.push("Bolacha")
console.log(comidas)
*/

/* REMOVER UM ELEMENTO NO ARRAY
comidas.pop()
console.log(comidas)
*/

/*REMOVE O PRIMEIRO NO ARRAY
comidas.shift()
console.log(comidas)
*/

/* ACRESCENTA UM ELEMENTO COMO PRIMEIRO NA LISTA
comidas.unshift("Lasanha")
console.log(comidas)
*/

//como acrescenta um elemento em qualquer posição no array

comidas.splice(1,0,"Cachorro-quente")
//posição inicial , 0 , novo elemento , continua
console.log(comidas)
