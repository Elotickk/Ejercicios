// Ejercicio Nro. 4:
// Realizar un programa que permita introducir tres valores y determine si la suma de los dos
// primeros es igual al tercer valor ingresado.

let valor1 = parseInt(prompt("Ingresa un valor"))
let valor2 = parseInt(prompt("Ingresa un valor"))
let valor3 = parseInt(prompt("Ingresa un valor"))

let suma = valor1 + valor2

if (suma == valor3) {
alert(`La suma de ${valor1} + ${valor2} es igual a ${valor3}.`)
}
else {
alert(`La suma de ${valor1} + ${valor2} no es igual a ${valor3}.`)}