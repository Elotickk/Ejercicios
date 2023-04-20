
//Ejercicio Nro. 1
///Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y que realice las siguientes operaciones //

// Pedimos al usuario que ingrese los dos números
let a = NaN;
let b = NaN;

// Validamos que los valores ingresados sean números

while (isNaN(a) || isNaN(b)) {
    alert("Por favor, ingrese números válidos");
    a = parseInt(prompt("Ingrese un número:"));
    b = parseInt(prompt("Ingrese otro número:"));
}

  // Realizamos varias operaciones con los números ingresados
    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a * b;
    let division = a / b;
    let resto = a % b;

  // Mostramos los resultados en la consola
    console.log(`La suma de ${a} + ${b} es = ${suma}`);
    console.log(`La resta de ${a} - ${b} es = ${resta}`);
    console.log(`La multiplicacion de ${a} * ${b} es = ${multiplicacion}`);
    console.log(`La division de ${a} / ${b} es = ${division}`);
    console.log(`La resto de ${a} % ${b} es = ${resto}`);