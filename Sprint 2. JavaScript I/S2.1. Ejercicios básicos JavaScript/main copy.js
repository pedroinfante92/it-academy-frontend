'use strict'

// Ejercicio 1.1: Arrow functions / Nivel 1 / Ejercicio 1  / Conversión de funciones
// Tienes una función add que acepta dos parámetros y devuelve su suma. 
// Conviértela en una función de flecha. Por ejemplo:function add(a, b) {return a + b;}.

const suma = (a, b) => a + b

console.log(suma(2, 5))

// Ejercicio 1.1: Arrow functions / Nivel 1 / Ejercicio 2  / Función de flecha sin parámetros
// Crea una función de flecha llamada randomNumber que no necesite parámetros y que devuelva un número aleatorio entre 0 y 100.

const randomNumber = () => Math.ceil((Math.random()* 100) + 1)

console.log(randomNumber())


// Ejercicio 1.1: Arrow functions / Nivel 1 / Ejercicio 3  / Uso de 'this' en las funciones de flecha
// Crea una clase person que tenga una propiedad name y una función greet que utilice una función de flecha. 
// La función debe imprimir un saludo que incluya el nombre de la persona. Por ejemplo: console.log(Hola, ${this.name});.

class Person {
    constructor(name) {
        this._name = name
    }

    greet = () => {console.log(`Hola ${this._name}`)}
}

const persona1 = new Person('Pedro')

persona1.greet()


// Ejercicio 1.1: Arrow functions / Nivel 2 / Ejercicio 4  / Función de flecha dentro de un loop
// Crea una función llamada printNumbers que acepte un array de números y utilice un loop for
// para imprimir cada número en la consola utilizando una función de flecha.

const numbers = [1, 2, 3, 4, 5]

const printNumbers = (numbers) => {
    for(let i = 0; i < numbers.length; i++) {
        const numberToPrint = numbers[i] 
        console.log(numberToPrint)
    }
}


printNumbers(numbers)

// Ejercicio 1.1: Arrow functions / Nivel 3 / Ejercicio 5  / Función de flecha con 'setTimeout'
// Crea una función de flecha que imprima un mensaje en la consola después de esperar 3 segundos.

setTimeout(() => {
    console.log('delayed 3 seconds')
}, 3000)


// Ejercicio 1.2: Operador ternario / Nivel 1 / Ejercicio 1  / Operador ternario básico
// Escribe una función puedeConducir que acepte la edad como parámetro y utilice el operador ternario
// para determinar si el usuario puede conducir. 
// Si la edad es 18 o más, debe devolver 'Puedes conducir'. Si no, debe devolver 'No puedes conducir'.

const puedeConducir = edad => edad >= 18 ? 'Puedes conducir' : 'No puedes conducir'

console.log(puedeConducir(17))


// Ejercicio 1.2: Operador ternario / Nivel 1 / Ejercicio 2  / Uso con operadores de comparación
// Escribe una expresión que utilice el operador ternario para determinar cuál de los dos números dados (num1 y num2) es mayor.
// Si num1 es mayor, devuelve 'num1 es mayor'. Si no, devuelve 'num2 es mayor'.

const numeroMayor = (num1, num2) => num1 > num2 ? `${num1} es mayor` : `${num2} es mayor`

console.log(numeroMayor(2, 4))


// Ejercicio 1.2: Operador ternario / Nivel 2 / Ejercicio 3.1  / Uso enlazado de operadores ternarios
// Escribe una expresión que utilice enlaces de operadores ternarios para determinar si un número es positivo, negativo o cero.

const numeroPositivo = num => num > 0 ? `${num} é positivo` : num < 0 ? `${num} é negativo` : `${num} é cero`

console.log(numeroPositivo(-1))

// Ejercicio 1.2: Operador ternario / Nivel 2 / Ejercicio 3.2 / Operador ternario con funciones
// Crea una función encontrarMaximo que acepte tres parámetros (a, b, c) y utilice el operador ternario para determinar el valor máximo.

const encontrarMaximo = (a, b, c) => a > b && a > c ? `${a} es el valor máximo` : b > c ? `${b} es el valor máximo` : `${c} es el valor máximo`

console.log(encontrarMaximo(1, 10, 5))

// Ejercicio 1.2: Operador ternario / Nivel 2 / Ejercicio 4 / Operador ternario dentro de un bucle
// Escribe una función parOImpar que acepte un array de números y utilice un bucle para recorrer el array.
// Dentro del bucle, utiliza el operador ternario para determinar si cada número es par o impar.

const parOImpar = nums => {
    
    
    for(let i = 0; i < nums.length; i++) {
        console.log(nums[i] % 2 == 0 ? `${nums[i]} es par` : `${nums[i]} es impar`)
    }

}

parOImpar(numbers)


// Ejercicio 1.3: Callbacks / Nivel 1 / Ejercicio 1 / Callback básico
// Escribe una función llamada procesar que acepte dos parámetros: un número y una función de callback. 
// La función procesar debe invocar la función de callback, pasando el número como parámetro.

const processar = (number, callback) => callback(number)

processar(5, number => console.log(number))


// Ejercicio 1.3: Callbacks / Nivel 1 / Ejercicio 2 / Callbacks con operaciones matemáticas
// Escribe una función calculadora que acepte tres parámetros: dos números y una función de callback.
// La función calculadora debe invocar la función de callback con los dos números como parámetros.
// Luego, llama calculadora con una función que realice la suma de los dos números.

const calculadora = (num1, num2, suma) => {
    suma(num1, num2)
}

calculadora(1, 5, (a, b) => console.log(a + b))

// Ejercicio 1.3: Callbacks / Nivel 2 / Ejercicio 3 / Uso de callbacks en funciones asíncronas
// Escribe una función esperarISaludar que acepte dos parámetros: un nombre y una función de callback.
// La función debe esperar 2 segundos y entonces invocar la función de callback, pasando el nombre como parámetro.

const esperarISaludar = (nombre, callback) => setTimeout(callback, 2000, nombre)

esperarISaludar('Pedro', (nombre) => console.log('Hello ' + nombre + ' delayed 2s'))


// Ejercicio 1.3: Callbacks / Nivel 2 / Ejercicio 4 / Callbacks con arrays
// Escribe una función procesarElements que acepte dos parámetros: un array y una función de callback. 
// La función procesarElements debe invocar la función de callback por cada elemento del array.

const processarElements = (array, callback) => {
    
    for(let i = 0; i < array.length; i++) {
        callback(array[i])
    }   
}

processarElements(numbers, (number) => console.log(number))


// Ejercicio 1.3: Callbacks / Nivel 3 / Ejercicio 5 /
// Escribe una función procesarCadena que acepte dos parámetros: 
// una cadena de caracteres y una función de callback. 
// La función procesarCadena debe convertir la cadena a mayúsculas y entonces invocar la función de callback con la cadena transformada.

const procesarCadena = (string, callback) => {
        
    const newString = string.toUpperCase()

    callback(newString)

}

procesarCadena('ola', (string) => console.log(string) )


// Ejercicio 1.4: Rest & Spread operators / Nivel 1 / Ejercicio 1 / Operador Spread en Arrays
// Crea dos arrays, array1 y array2. 
// Use el operador spread para crear una tercera array que contenga todos los elementos de array1 y array2.

const array1 = [10, 20, 30 , 40]
const array2 = [5, 15, 25 , 35]
const arraySpread = [...array1, ...array2]

console.log(arraySpread)


// Ejercicio 1.4: Rest & Spread operators / Nivel 1 / Ejercicio 2 / Operador Rest en Funciones
// Crea una función 'suma' que utilice el operador rest para aceptar un número indeterminado de argumentos y devolver su suma.

let suma2 = (...nums) => {
    
return nums.reduce((total, num) => total + num, 0)
}

console.log(suma2(1, 2, 3, 4))

// Ejercicio 1.4: Rest & Spread operators / Nivel 2 / Ejercicio 3 / Copiando objetos con Spread
// Crea un objeto 'objeto1'. Luego crea un segundo objeto, 'objeto2', que sea una copia de 'objeto1' utilizando el operador spread.
// Cambia una propiedad de 'objeto2' y comprueba que 'objeto1' no ha cambiado.

const objecto1 = {nombre: 'Pedro', edad: 32}
const objecto2 = {...objecto1}
objecto2.nombre = 'Antonio'

console.log(objecto1)
console.log(objecto2)


// Ejercicio 1.4: Rest & Spread operators / Nivel 2 / Ejercicio 4 / Resto en Destructuring
// Crea un array con varios elementos. 
// Utiliza destructuring y el operador resto para asignar los primeros dos elementos a variables,
// y después asignar el resto de los elementos a una tercera variable.

const variosElementos = ['ABC', true, 32, 'qwerty', 100]
const [primero, secundo, ...resto] = variosElementos

console.log(variosElementos)
console.log(primero)
console.log(secundo)
console.log(resto)


// Ejercicio 1.4: Rest & Spread operators / Nivel 3 / Ejercicio 5 / Spread en Funciones
// Crea una función que acepte tres argumentos.
// Después, crea un array con tres elementos y llama a la función utilizando el operador spread con esa array.

const spreadFunction = (a, b, c) => {
    console.log(a)
    console.log(b)
    console.log(c)
}

const newArray = [1, 2, 3]

spreadFunction(...newArray)

// Ejercicio 1.4: Rest & Spread operators / Nivel 3 / Ejercicio 6 / Fusionando Objetos con Spread
// Crea dos objetos con propiedades distintas. Utiliza el operador spread para fusionar estos dos objetos en uno nuevo.

const object3 = {name: 'Pedro', age: 32}
const object4 = {path: 'React', country: 'Portugal'}

const objectCombined = {...object3, ...object4}

console.log(objectCombined)

// Ejercicio 1.5: Array transformations / Nivel 1 / Ejercicio 1 / Map
// Tiene un array de números [1, 2, 3, 4]. Crea un nuevo array que contenga el cuadrado de cada número.

const arrayMap =  [1, 2, 3, 4]

const newArrayMap = arrayMap.map(num => num * num)

console.log(arrayMap)
console.log(newArrayMap)


// Ejercicio 1.5: Array transformations / Nivel 1 / Ejercicio 2 / Filter
// Tiene un array de números [1, 2, 3, 4]. Crea un nuevo array que sólo contenga los números pares.

const arrayFilter =  [1, 2, 3, 4]

const newArrayFilter = arrayMap.filter(num => num % 2 == 0)

console.log(arrayFilter)
console.log(newArrayFilter)


// Ejercicio 1.5: Array transformations / Nivel 1 / Ejercicio 3 / Find
// Tiene un array de números [1, 10 , 8, 11]. Use la función find para encontrar el primer número que es mayor a 10.

const arrayFind =  [1, 10 , 8, 11]

const newArrayFind = arrayFind.find(num => num > 10)

console.log(arrayFind)
console.log(newArrayFind)

// Ejercicio 1.5: Array transformations / Nivel 1 / Ejercicio 4 / Reduce
// Tiene un array de números [13, 7, 8, 21]. Utiliza la función reduccion para calcular la suma total de los números.

const arrayReduce = [13, 7, 8, 21]

const arrayReduced = arrayReduce.reduce((a, b) => a + b , 0)

console.log(arrayReduced)


// Ejercicio 1.5: Array transformations / Nivel 2 / Ejercicio 5 /
// Dado un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una función en una sola línea que haga lo siguiente:
//  - Filtra los números mayores o iguales a 10.
//  - Multiplica cada número filtrado por 2.
//  - Calcula la suma de los números filtrados y multiplicados por 2.
//  - La función debe devolver el resultado de la suma.

const superArray = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]

const result = superArray.filter(num => num > 10).map(num => num * 2).reduce((a, b) => a + b, 0)

console.log(result)


// Ejercicio 1.5: Array transformations / Nivel 3 / Ejercicio 6 / Every & Some
// Usa every y some para determinar si todos o algunos de los elementos del array [11, 12, 13, 14] son ​​mayores que 10, respectivamente

const arrayEverySome = [11, 12, 13, 14]

const every = arrayEverySome.every(num => num > 10)
const some = arrayEverySome.some(num => num > 10)

console.log(every)
console.log(some)


// Ejercicio 1.6: Array loops /

const nombres = ['Anna', 'Bernat', 'Clara']
const numeros = [1, 2, 3, 4, 5, 6]
const obj = { nombre: 'Ola', edad: 25, ciudad: 'Barcelona' }

// Ejercicio 1.6: Array loops / Nivel 1 / Ejercicio 1 / forEach
// Tiene un array de nombres. Utiliza forEach para imprimir cada nombre en la consola: let nombres = ['Anna', 'Bernat', 'Clara']

const forEach = nombres.forEach(nombre => console.log(nombre))

// Ejercicio 1.6: Array loops / Nivel 1 / Ejercicio 2 / for-of
// Tiene un array de nombres. Utiliza un bucle for-of para imprimir cada nombre en la consola: let noms = ['Anna', 'Bernat', 'Clara']

for (const nombre of nombres) {
    console.log(nombre)
}

// Ejercicio 1.6: Array loops / Nivel 1 / Ejercicio 3 / filter
// Tiene un array de números. Use filtro para crear una nueva array que sólo contenga los números pares. let numeros = [1, 2, 3, 4, 5, 6];

const filtro = numeros.filter(num => num % 2 == 0)
console.log(filtro)

// Ejercicio 1.6: Array loops / Nivel 2 / Ejercicio 4 / for-in
// Tiene un objeto con pares clave-valor: let obj = { nombre: Ola, edad: 25, ciudad: 'Barcelona' };
// Use un bucle for-in para imprimir en la consola cada clave y su valor correspondiente.


for (const edad in obj) {
    console.log(edad, obj[edad])
}


// Ejercicio 1.6: Array loops / Nivel 2 / Ejercicio 5 / for-of con break
// Tiene un array de números. 
// Utiliza un bucle for-of para imprimir en la consola los números hasta encontrar el número 5,entonces detiene el bucle: let numeros = [1, 2, 3, 4, 5, 6];

for (const numero of numeros) {
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

const promise2 = new Promise((resolve, reject) => {
    setTimeout((input) => {
        if(input === 'Hello') {
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

async function asyncFunction() {
    const resultado = await promise1
    console.log(result)
}

asyncFunction()

// Ejercicio 1.7: Promisas & Async/Await / Nivel 2 / Ejercicio 5 / Gestión de errores con async/await
// Modifica la función del ejercicio 4 para que capture cualquier posible error utilizando un blog try/catch.

async function asyncFunction2() {
    
    try {
        const result = await promise1
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}

asyncFunction2()

// Ejercicio 1.7: Promisas & Async/Await / Nivel 3 / Ejercicio 6 / Promise.all

Promise.all([promise1, promise2]).then(result => {
    console.log(result)
  })