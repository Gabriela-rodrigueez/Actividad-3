/*let nombre = `Gabriela`; //Se utiliza para variables cuyo valor puede cambiar. (Comilla abierta catalán)
const edad = 22; //Se utiliza para variables cuyo valor no cambiará, es constante
console.log (`Hola mi nombre es ${nombre}`);
console.log (`Tengo ${edad} años`);
let año = 2002;
console.log (`Naci en ${año}`);

let resultado = 10 + 5;
console.log (`El resultado es ${resultado}`);

let esMayor = 10 > 5 ; // mayor (>), menor (<)
console.log (`Quien es mayor ${esMayor}`);

let esVerdadero = true && false;


if (edad >= 18){
    console.log (`Eres mayor de edad.`)
} else{
    console.log (`Eres menor de edad`)
}
*/


//Ejercicios de Sintaxis Básica:

// 1. Crea una variable nombre con tu nombre y úsala para imprimir un mensaje.
let nombre = `Isabel`
console.log(`Mi nombre es ${nombre}`)

// 2. Declara y suma dos números, muestra el resultado en consola.
let resultado = 10 + 5;
console.log (`El resultado es: ${resultado}`);

// 3. Usa operadores lógicos para evaluar si 10 > 5 y 5 < 2.
let esMayor = 10 > 5 ; // mayor (>), menor (<)
console.log (`Es mayor ${esMayor}`);

let esMenor = 5 < 2 ; // mayor (>), menor (<)
console.log (`Es menor ${esMenor}`);

let esVerdadero = true && false;

// 4. Declara variables con let y const y nota las diferencias al intentar cambiarlas.
let animal = `Gato`;
const numero = 174;
animal = `Perro`;
console.log (`El animal es: ${animal}`);

// 5. Escribe un comentario que explique qué hace tu código.
/*M Mi código hace que la variable let `Gato` se cambia por otra `Perro` ya que esta se puede ir modificando; en cambio, la variable const no se puede modificar, ya que es una variable constanste */

// 6. Declara una variable de tipo boolean y úsala en una operación lógica.
let esMayordeEdad = true; //variable booleana
if (esMayordeEdad &&  54 > 18){    //(&&)Y lógico
    console.log ("Eres mayor de edad y tiene más de 18 años");
} else{
    console.log ("No cumples con las condiciones, eres menor de 18 años");
}

// 7. Imprime el tipo de dato de una variable usando typeof.
console.log(typeof esMayordeEdad); //Usamos la variable anterior "let esMayordeEdad = true;"
/* Muesta que tipo es la variable, en este caso es una booleana, por eso imprimirá en la consola "Booleam" */

// 8. Declara un array y muestra uno de sus elementos en la consola.
let colores = ["azul", "blanco", "morado", "rojo", "amarillo", "naranja", "verde", "negro"]; //(0;7)
console.log (colores[2]);

// 9. Usa una operación con % para encontrar el resto de 17 ÷ 3.
let resto = 17 % 3;
console.log(resto);

// 10. Declara una variable sin valor e imprime su valor inicial.
let miVariable;
console.log(miVariable); // imprime "undefined"






//Ejercicios de Estructuras de Control:

// 1. Escribe un programa que verifique si un número es positivo o negativo.
let num = -49;

if (num > 0) {
    console.log("El número es positivo");
} else if (num < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}

// 2. Usa switch para imprimir el día de la semana según un número del 1 al 7.
let diaNumero = 4;
switch (diaNumero) {
    case 1: console.log("Lunes");
    break;
    case 2: console.log("Martes");
    break;
    case 3: console.log("Miércoles");
    break;
    case 4: console.log("Jueves");
    break;
    case 5: console.log("Viernes");
    break;
    case 6: console.log("Sábado");
    break;
    case 7: console.log("Domingo");
    break;
    default: console.log("El número es incorrecto. Debe ser del 1 al 7");
} 

// 3. Haz un bucle for que imprima los números del 1 al 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 4. Crea un programa que calcule el factorial de un número usando while.
let num1 = 6;
let factorial = 1;

while (num1 > 1) {
    factorial *= num1;
    num1--;
}
console.log(`El factorial es: ${factorial}`);

// 5. Escribe un condicional que determine si una persona puede votar según su edad.
let mayorEdad = 19;
puedoVotar(mayorEdad);

function puedoVotar(edad) {
    if (edad >= 18) {
        console.log("Sí puedes votar");
    } else {
        console.log("No puedes votar");
    }
}

// 6. Imprime los números pares entre 1 y 20 con un bucle for.

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
/*
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
*/

// 7. Usa switch para imprimir un mensaje dependiendo de la calificación (A, B, C, D, F).
let calificacion = "B"
switch (calificacion) {
    case "A": console.log("¡Excelente!");
    break;
    case "B": console.log("Buen trabajo");
    break;
    case "C": console.log("Puedes mejorar");
    break;
    case "D": console.log("Debes estudiar más");
    break;
    case "F": console.log("Reprobado");
    break;
    default: console.log("Esta calificación no es válida");
}

// 8. Haz un programa que pida dos números y los sume si ambos son positivos.
let numero1 =parseFloat(prompt("Ingrese el primer número: "));
let numero2 =parseFloat(prompt("Ingrese el segundo número: "));

if (numero1 > 0 && numero2 > 0) {
    let suma = numero1 + numero2;
    console.log(`La suma de ${numero1} y ${numero2} es: ${suma}`)
} else {
    console.log("Ambos números ingresados deben ser positivos para hacer la suma")
}

// 9. Escribe un bucle while que cuente de 10 a 1 en orden descendente.
let contador = 10;
while (contador >=1) {
    console.log(contador);
    contador--; // se le resta -1 (operador decreciente)
}
// Cuando se escribe como sufijo (contador--), el operador devuelve el valor actual de la variable antes de decrementar.
// Cuando se escribe como prefijo (--contador), primero decrementa la variable y luego devuelve el nuevo valor.


// 10. Crea una calculadora básica que permita sumar o restar según el operador ingresado.

let numero3 =parseFloat(prompt("Ingrese el primer número: "));

let operador = prompt("Ingrese unos de los siguientes operadores (+ ó -): ")

let numero4 =parseFloat(prompt("Ingrese el segundo número: "));

if (operador === "-") {
    let resultado = numero3 - numero4;
    console.log(`El resultado de ${numero3} - ${numero4} es: ${resultado}`);
} else if (operador === "+") {
    let resultado = numero3 + numero4;
    console.log(`El resultado de ${numero3} + ${numero4} es: ${resultado}`);
} else {
    console.log("El operador ingresado es inválido")
}






//Ejercicios de Funciones:

// 1. Declara una función que calcule el área de un triángulo.


// 2. Crea una función anónima que determine si un número es par o impar.


// 3. Usa una función de flecha para multiplicar dos números.


// 4. Escribe una función que convierta una palabra a mayúsculas.


// 5. Haz una función que reciba dos números y retorne el mayor de ellos.


// 6. Crea una función que invierta una cadena.


// 7. Declara una función que convierta grados Celsius a Fahrenheit.


// 8. Escribe una función que verifique si una palabra es un palíndromo.


// 9. Haz una función que calcule la suma de los números de un arreglo.


// 10. Usa funciones para simular una calculadora básica.


