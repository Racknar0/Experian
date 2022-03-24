/************** ( 'EJERCICIO 1' ) **************/
const entero = +prompt('Ingresa un numero');
const arr = [];
function divisors(a) {
    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            arr.push(i);
        }
    }
    return arr.length == 0 ? `${a} es Primo` : arr;
}
console.log(divisors(entero));




/************** ( 'EJERCICIO 2' ) **************/
recipe = {
    recipeFlour: 500,
    recipeSugar: 200,
    recipeEggs: 1,
};

available = { 
    aviableFlour: 1200,
    aviableSugar: 1200,
    aviableEggs: 5,
    aviableMilk: 200 
};

/* APLICANDO DESTRUCTURING */
function cakes(recipe, available) {
    const {recipeFlour, recipeSugar, recipeEggs} = recipe
    const {aviableFlour, aviableSugar, aviableEggs} = available
    const quantityFlour = Math.floor(aviableFlour/recipeFlour)
    const quantitySugar = Math.floor(aviableSugar/recipeSugar)
    const quantityEggs = Math.floor(aviableEggs/recipeEggs)
    return(Math.min(quantityFlour, quantitySugar, quantityEggs));
}

console.log(cakes(recipe, available)); // debe retornar 2