'use strict'

// Ejercicio 1.1: Arrow functions / Nivel 1 / Ejercicio 1  / Conversión de funciones
// Tienes una función add que acepta dos parámetros y devuelve su suma. 
// Conviértela en una función de flecha. Por ejemplo:function add(a, b) {return a + b;}.

let sum1 = (a, b) => a + b
console.log(sum1(5, 7))

// Ejercicio 1.1: Arrow functions / Nivel 1 / Ejercicio 2  / Función de flecha sin parámetros
// Crea una función de flecha llamada randomNumber que no necesite parámetros y que devuelva un número aleatorio entre 0 y 100.

let randomNumber = () => Math.floor(Math.random() * 101)
console.log(randomNumber())

// Ejercicio 1.1: Arrow functions / Nivel 1 / Ejercicio 3  / Uso de 'this' en las funciones de flecha
// Crea una clase person que tenga una propiedad name y una función greet que utilice una función de flecha. 
// La función debe imprimir un saludo que incluya el nombre de la persona. Por ejemplo: console.log(Hola, ${this.name});.

class Person {

    constructor(name) {
        this._name = name
    }

    greet = () => `Hola, ${this._name}`
}

const person1 = new Person('Pedro')

console.log(person1.greet())

// Ejercicio 1.1: Arrow functions / Nivel 2 / Ejercicio 4  / Función de flecha dentro de un loop
// Crea una función llamada printNumbers que acepte un array de números y utilice un loop for
// para imprimir cada número en la consola utilizando una función de flecha.

const numbersArray = [1, 2, 3, 4, 5]

let printNumber = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(numbersArray[i])
    }
}

printNumber(numbersArray)

// Ejercicio 1.1: Arrow functions / Nivel 3 / Ejercicio 5  / Función de flecha con 'setTimeout'
// Crea una función de flecha que imprima un mensaje en la consola después de esperar 3 segundos.

setTimeout(() => console.log('Hello, delayed 3s'), 3000)

// Ejercicio 1.2: Operador ternario / Nivel 1 / Ejercicio 1  / Operador ternario básico
// Escribe una función puedeConducir que acepte la edad como parámetro y utilice el operador ternario
// para determinar si el usuario puede conducir. 
// Si la edad es 18 o más, debe devolver 'Puedes conducir'. Si no, debe devolver 'No puedes conducir'.

let canDrive = age => {
    const message = age >= 18 ? 'Can drive' : "Can't drive"
    console.log(message)
}

canDrive(17)

// Ejercicio 1.2: Operador ternario / Nivel 1 / Ejercicio 2  / Uso con operadores de comparación
// Escribe una expresión que utilice el operador ternario para determinar cuál de los dos números dados (num1 y num2) es mayor.
// Si num1 es mayor, devuelve 'num1 es mayor'. Si no, devuelve 'num2 es mayor'.

let isHigher = (num1, num2) => {
    const checkHigher = num1 > num2 ? `${num1} is higher`: `${num2} is higher`
    console.log(checkHigher)
}

isHigher(10, 5)

// Ejercicio 1.2: Operador ternario / Nivel 2 / Ejercicio 3.1  / Uso enlazado de operadores ternarios
// Escribe una expresión que utilice enlaces de operadores ternarios para determinar si un número es positivo, negativo o cero.

let isPositive = num => {
    let checkNumber = num == 0 ? 'zero' : num > 0 ? 'positive' : 'negative'
    console.log(checkNumber)
}

isPositive(-1)

// Ejercicio 1.2: Operador ternario / Nivel 2 / Ejercicio 3.2 / Operador ternario con funciones
// Crea una función encontrarMaximo que acepte tres parámetros (a, b, c) y utilice el operador ternario para determinar el valor máximo.

let findMax = (a, b, c) => {
    
    let maxMessage = a > b && a > c
    ? `${a} is the maximum` 
    : b > a && b > c 
        ? `${b} is the maximum`
        : c > a && c > b 
            ? `${c} is the maximum` 
            : 'there are equal numbers'
    
    console.log(maxMessage)
}

findMax(-1, 2, 2)


// Ejercicio 1.2: Operador ternario / Nivel 2 / Ejercicio 4 / Operador ternario dentro de un bucle
// Escribe una función parOImpar que acepte un array de números y utilice un bucle para recorrer el array.
// Dentro del bucle, utiliza el operador ternario para determinar si cada número es par o impar.

const numbersArray2 = [2, 3, 10, 7, 0]

let isEvenOrOdd = array => {

    for(let i = 0; i < array.length; i++) {
      
        let checkArray1 = array[i] == 0 ? 'zero' : array[i] % 2 == 0 ? 'even' : 'odd'
    
        console.log(checkArray1)
    }

}

isEvenOrOdd(numbersArray2)

// Ejercicio 1.3: Callbacks / Nivel 1 / Ejercicio 1 / Callback básico
// Escribe una función llamada procesar que acepte dos parámetros: un número y una función de callback. 
// La función procesar debe invocar la función de callback, pasando el número como parámetro.

function process(number, callback) {
    callback(number)
}

process(5 , num => {console.log(`${num}`)})

// Ejercicio 1.3: Callbacks / Nivel 1 / Ejercicio 2 / Callbacks con operaciones matemáticas
// Escribe una función calculadora que acepte tres parámetros: dos números y una función de callback.
// La función calculadora debe invocar la función de callback con los dos números como parámetros.
// Luego, llama calculadora con una función que realice la suma de los dos números.

function calculator(num1, num2, callback) {
    callback(num1, num2)
}

calculator(2, 4, (a, b) => {console.log(`${a + b}`)})

// Ejercicio 1.3: Callbacks / Nivel 2 / Ejercicio 3 / Uso de callbacks en funciones asíncronas
// Escribe una función esperarISaludar que acepte dos parámetros: un nombre y una función de callback.
// La función debe esperar 2 segundos y entonces invocar la función de callback, pasando el nombre como parámetro.

function waitGreet(name, callback) {
    setTimeout(callback, 2000 , name)
}

waitGreet('IT Academy', (userName) => {console.log('Hello ' + userName + ', delayed 2s')})

// Ejercicio 1.3: Callbacks / Nivel 2 / Ejercicio 4 / Callbacks con arrays
// Escribe una función procesarElements que acepte dos parámetros: un array y una función de callback. 
// La función procesarElements debe invocar la función de callback por cada elemento del array.

const names = ['Pedro', 'Antonio', 'Luis', 'Fernando', 'Francisco']


function processElements(array, callback) {
    
    for(let i = 0; i < array.length; i++) {
        callback(names[i])
    }
    
}

processElements(names, name => {console.log(`Hello ${name}`)})

// Ejercicio 1.3: Callbacks / Nivel 3 / Ejercicio 5 /
// Escribe una función procesarCadena que acepte dos parámetros: 
// una cadena de caracteres y una función de callback. 
// La función procesarCadena debe convertir la cadena a mayúsculas y entonces invocar la función de callback con la cadena transformada.

const characters = "a b c d e f g h i j k l m n o p q r s t u v w x y z"

function processString(string, callback) {
    const upperCaseString = string.toUpperCase()
    callback(upperCaseString)
}

processString(characters, transformedString => { console.log(transformedString)})

// EXTRA - REST & SPREAD//

const numbersExtra = [1, 2, 3, 4, 5]

const [one, two, ...rest2] = numbersExtra // rest operator

console.log(numbersExtra) // [1, 2, 3, 4, 5]
console.log(one) // 1
console.log(two) // 2
console.log(rest2) // [3, 4, 5]


const moreNumbers = [-1, 0, ...numbersExtra] // spread operator

console.log(numbersExtra) // [1, 2, 3, 4, 5]
console.log(moreNumbers) // [-1, 0, 1, 2, 3, 4, 5]

// Ejercicio 1.4: Rest & Spread operators / Nivel 1 / Ejercicio 1 / Operador Spread en Arrays
// Crea dos arrays, array1 y array2. 
// Use el operador spread para crear una tercera array que contenga todos los elementos de array1 y array2.

const array1 = [1, 2, 3, 4, 5]
const array2 = [6, 7, 8, 9, 10]
const array3 = [...array1, ...array2]
console.log(array3)


// Ejercicio 1.4: Rest & Spread operators / Nivel 1 / Ejercicio 2 / Operador Rest en Funciones
// Crea una función 'suma' que utilice el operador rest para aceptar un número indeterminado de argumentos y devolver su suma.


function sum2(...numbers) {
    
    let total = 0
    
    for(let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }

    return total
}

let sum = sum2(1, 2, 3, 4)
console.log(sum)


// Ejercicio 1.4: Rest & Spread operators / Nivel 2 / Ejercicio 3 / Copiando objetos con Spread
// Crea un objeto 'objeto1'. Luego crea un segundo objeto, 'objeto2', que sea una copia de 'objeto1' utilizando el operador spread.
// Cambia una propiedad de 'objeto2' y comprueba que 'objeto1' no ha cambiado.

let object1 = {name: 'Pedro', path: 'React'}
let object2 = {...object1}
object2.name = 'Antonio'

console.log(object2)

// Ejercicio 1.4: Rest & Spread operators / Nivel 2 / Ejercicio 4 / Resto en Destructuring
// Crea un array con varios elementos. 
// Utiliza destructuring y el operador resto para asignar los primeros dos elementos a variables,
// y después asignar el resto de los elementos a una tercera variable.

let originalArray = ['Ola', 32, true, 'surdo']

let [first, second, ...rest1] = originalArray

console.log(first)
console.log(second)
console.log(rest1)

// Ejercicio 1.4: Rest & Spread operators / Nivel 3 / Ejercicio 5 / Spread en Funciones
// Crea una función que acepte tres argumentos.
// Después, crea un array con tres elementos y llama a la función utilizando el operador spread con esa array.

function threeArguments(arg1, arg2, arg3) {
    console.log(arg1)
    console.log(arg2)
    console.log(arg3)
};

const threeArgumentsArray = [1, 2, 3]

threeArguments(...threeArgumentsArray)

// Ejercicio 1.4: Rest & Spread operators / Nivel 3 / Ejercicio 6 / Fusionando Objetos con Spread
// Crea dos objetos con propiedades distintas. Utiliza el operador spread para fusionar estos dos objetos en uno nuevo.

const object3 = {name: 'Pedro', age: 32}
const object4 = {path: 'React', country: 'Portugal'}

const object5 = {...object3, ...object4}
console.log(object3)
console.log(object4)
console.log(object5)

// Ejercicio 1.5: Array transformations / Nivel 1 / Ejercicio 1 / Map
// Tiene un array de números [1, 2, 3, 4]. Crea un nuevo array que contenga el cuadrado de cada número.

const arrayMap = [1, 2, 3, 4]
const squareResult = arrayMap.map(element => element * element)

console.log(squareResult)

// Ejercicio 1.5: Array transformations / Nivel 1 / Ejercicio 2 / Filter
// Tiene un array de números [1, 2, 3, 4]. Crea un nuevo array que sólo contenga los números pares.

const arrayFilter = [1, 2, 3, 4]
const oddResult = arrayFilter.filter(element => element % 2 == 0)

console.log(oddResult)

// Ejercicio 1.5: Array transformations / Nivel 1 / Ejercicio 3 / Find
// Tiene un array de números [1, 10 , 8, 11]. Use la función find para encontrar el primer número que es mayor a 10.

const arrayFind = [1, 10, 8, 11]
const firstNumberHigherThan10 = arrayFind.find(element => element > 10)

console.log(firstNumberHigherThan10)

// Ejercicio 1.5: Array transformations / Nivel 1 / Ejercicio 4 / Reduce
// Tiene un array de números [13, 7, 8, 21]. Utiliza la función reduccion para calcular la suma total de los números.

const arrayReduce = [13, 7, 8, 21]

const sumArray = arrayReduce.reduce( (accumulator, element) => accumulator += element )

console.log(sumArray)

// Ejercicio 1.5: Array transformations / Nivel 2 / Ejercicio 5 /
// Dado un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una función en una sola línea que haga lo siguiente:
//  - Filtra los números mayores o iguales a 10.
//  - Multiplica cada número filtrado por 2.
//  - Calcula la suma de los números filtrados y multiplicados por 2.
//  - La función debe devolver el resultado de la suma.

const largeArray = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]

let result = largeArray.filter(element => element >= 10).map(element => element * 2).reduce((accumulator, element) => sum += element)

console.log(result)

// Ejercicio 1.5: Array transformations / Nivel 3 / Ejercicio 6 / Every & Some
// Usa every y some para determinar si todos o algunos de los elementos del array [11, 12, 13, 14] son ​​mayores que 10, respectivamente

const everySomeArray = [11, 12, 13, 14]

let every = everySomeArray.every(element => element > 10)
console.log(every)

let some = everySomeArray.some(element => element > 10)
console.log(some)



// Ejercicio 1.6: Array loops /

let nombres = ['Anna', 'Bernat', 'Clara']
let numeros = [1, 2, 3, 4, 5, 6]
let obj = { nombre: 'Ola', edad: 25, ciudad: 'Barcelona' }

// Ejercicio 1.6: Array loops / Nivel 1 / Ejercicio 1 / forEach
// Tiene un array de nombres. Utiliza forEach para imprimir cada nombre en la consola: let nombres = ['Anna', 'Bernat', 'Clara']

let forEach = nombres.forEach((nombre) => console.log(nombre))

// Ejercicio 1.6: Array loops / Nivel 1 / Ejercicio 2 / for-of
// Tiene un array de nombres. Utiliza un bucle for-of para imprimir cada nombre en la consola: let noms = ['Anna', 'Bernat', 'Clara']

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}

for (const nombre of nombres) {
    console.log(nombre)
}
// Ejercicio 1.6: Array loops / Nivel 1 / Ejercicio 3 / filter
// Tiene un array de números. Use filtro para crear una nueva array que sólo contenga los números pares. let numeros = [1, 2, 3, 4, 5, 6];

let filter = numeros.filter(element => element % 2 == 0)

console.log(filter)

// Ejercicio 1.6: Array loops / Nivel 2 / Ejercicio 4 / for-in
// Tiene un objeto con pares clave-valor: let obj = { nombre: Ola, edad: 25, ciudad: 'Barcelona' };
// Use un bucle for-in para imprimir en la consola cada clave y su valor correspondiente.

for(const key in obj) {
    console.log(key, obj[key])
}

// Ejercicio 1.6: Array loops / Nivel 2 / Ejercicio 5 / for-of con break
// Tiene un array de números. 
// Utiliza un bucle for-of para imprimir en la consola los números hasta encontrar el número 5,entonces detiene el bucle: let numeros = [1, 2, 3, 4, 5, 6];

for(const numero of numeros) {

    if(numero == 5) {
        break
    }
    
    console.log(numero)
}

// Ejercicio 1.6: Array loops / Nivel 3 / Ejercicio 6 / for-of con index
// Utiliza un bucle for-of para imprimir en la consola cada elemento del array y su posición (index): let noms = ['Anna', 'Bernat', 'Clara']

for (const [index, nombre] of nombres.entries()) {
    console.log(`${index} : ${nombre}`)
}

// Ejercicio 1.7: Promisas & Async/Await / Nivel 1 / Ejercicio 1 / Creación de una Promesa
// Crea una promesa que se resuelva después de 2 segundos y que devuelva la cadena de texto 'Hola, mundo'.

const promise1 = new Promise( resolve => {
    setTimeout(() => resolve('Hello, world of promises') , 2000)
})

// Ejercicio 1.7: Promisas & Async/Await / Nivel 1 / Ejercicio 2 / Utilización de una Promesa
// Utiliza la promesa creada en el ejercicio anterior. Crea un .then que imprima el resultado en la consola.

promise1.then(result => console.log(result))

// Ejercicio 1.7: Promisas & Async/Await / Nivel 1 / Ejercicio 3 / Promesa con reject
// Crea una promesa que se resuelva después de 2 segundos si el input es igual a 'Hola', y que la rechace si el input es cualquier otra cosa.

const promise2 = new Promise ((resolve, reject) => {
    setTimeout((input) => {
        if(input == 'Hello') {
            resolve('valid input')
        } else {
            reject('INVALID INPUT')
        }
    }, 2000)
})

.then(result => console.log(result))
.catch(error => console.log(error))


// Ejercicio 1.7: Promisas & Async/Await / Nivel 1 / Ejercicio 4 / Uso de async/await
// Escribe una función asíncrona que utilice la función await para esperar el resultado de la promesa creada en el ejercicio 1,
// y que después imprima este resultado en la consola.

async function asyncOperation1() {
        const result = await promise1
        console.log(result)
}

asyncOperation1()

// Ejercicio 1.7: Promisas & Async/Await / Nivel 2 / Ejercicio 5 / Gestión de errores con async/await
// Modifica la función del ejercicio 4 para que capture cualquier posible error utilizando un blog try/catch.

async function asyncOperation2() {
    
    try {
        const result = await promise1
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}

asyncOperation2()

// Ejercicio 1.7: Promisas & Async/Await / Nivel 3 / Ejercicio 6 / Promise.all

Promise.all([promise1, promise2]).then(result => {
    console.log(result)
  })

