// Ejercicio Nro.2:
// Realizar un programa que permita ingresar una cantidad determinada de días y en función
// de ello convierta los días en segundos.


// Pedimos al usuario que ingrese la cantidad de días
let dias = parseInt(prompt("Ingresa los dias a convertir a segunndos"))
console.log(dias)

// Calculamos la cantidad de segundos
let segundos = dias * 24 * 60 * 60 


// Mostramos los resultados en la consola
console.log(`${dias} días equivale a ${segundos} segundos.`);