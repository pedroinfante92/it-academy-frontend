# Conceitos de JavaScript: Arrow Functions, Operador Ternário, Callbacks, Rest & Spread, Array Transformations, Array Loops, Promises & Async/Await

## 1. Arrow Functions

* **O que são**: Arrow functions são uma forma concisa de escrever funções em JavaScript. Elas têm uma sintaxe mais curta em comparação com as funções tradicionais e herdam o valor de ``this`` do escopo pai.
* **Como funcionam**:
    * A sintaxe básica é ``(parâmetros) => expressão``.
    * Se houver apenas um parâmetro, os parênteses podem ser omitidos.
    * Se o corpo da função consistir em uma única expressão, as chaves e a palavra-chave ``return`` podem ser omitidas.
    * Arrow functions são úteis para funções anônimas e callbacks.

```javascript
// Função tradicional
function multiplicar(x, y) {
  return x * y;
}

// Arrow function equivalente
const multiplicar = (x, y) => x * y;

// Arrow function com um parâmetro
const quadrado = x => x * x;

// Arrow function sem parâmetros
const saudacao = () => "Olá!";
```

## 2. Operador Ternário

* **O que é**: O operador ternário é uma forma concisa de escrever expressões condicionais em JavaScript.
* **Como funciona**:
    * A sintaxe é ``condição ? expressão1 : expressão2``.
    * Se a condição for verdadeira, a ``expressão1`` é avaliada; caso contrário, a ``expressão2`` é avaliada.
    * É uma alternativa mais curta para instruções ``if...else`` simples.

``` javascript
const idade = 20;
const mensagem = idade >= 18 ? "Adulto" : "Menor de idade";
console.log(mensagem); // Saída: Adulto

const numero = 10;
const tipo = numero % 2 === 0 ? "Par" : "Ímpar";
console.log(tipo); // Saída: Par
``` 

## 3. Callbacks

* **O que são**: Callbacks são funções que são passadas como argumentos para outras funções e executadas após a conclusão de uma operação.
* **Como funcionam**:
    * Eles são usados para lidar com operações assíncronas, como solicitações de rede ou manipulação de eventos.
    * A função que recebe o callback o chama quando a operação é concluída.
    * Callbacks permitem que o código seja executado de forma não bloqueante.

``` javascript
function realizarOperacao(numero, callback) {
  const resultado = numero * 2;
  callback(resultado);
}

realizarOperacao(5, (resultado) => {
  console.log("O resultado é:", resultado); // Saída: O resultado é: 10
});
``` 

## 4. Rest & Spread Operators

* **O que são**: Os operadores rest e spread são usados para manipular arrays e objetos de forma mais flexível.
* **Como funcionam**:
    * **Spread**:
        * Permite expandir um array ou objeto em elementos individuais.
        * É usado para criar cópias de arrays e objetos ou combinar vários arrays e objetos.
    * **Rest**:
        * Permite coletar múltiplos argumentos de uma função em um array.
        * É usado em parâmetros de função para lidar com um número variável de argumentos.
        * é usado para pegar o resto de um array em um destructuring.

``` javascript
// Spread com arrays
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2); // Saída: [1, 2, 3, 4, 5, 6]

// Spread com objetos
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // Saída: { a: 1, b: 2, c: 3 }

// Rest com parâmetros de função
function somar(...numeros) {
  return numeros.reduce((acc, num) => acc + num, 0);
}
console.log(somar(1, 2, 3, 4)); // Saída: 10
``` 

## 5. Array Transformations

* **O que são**: Métodos de transformação de array são funções que permitem manipular arrays de forma concisa e expressiva.
* **Como funcionam**:
    * ``map()``: Cria um novo array aplicando uma função a cada elemento do array original.
    * ``filter()``: Cria um novo array com todos os elementos que passam em um teste especificado.
    * ``find()``: Retorna o primeiro elemento que passa em um teste especificado.
    * ``reduce()``: Reduz um array a um único valor, aplicando uma função acumuladora.
    * ``every()``: verifica se todos os elementos do array passam em um teste.
    * ``some()``: verifica se algum elemento do array passa em um teste.

``` javascript
const numeros = [1, 2, 3, 4, 5];

const quadrados = numeros.map(num => num * num);
console.log(quadrados); // Saída: [1, 4, 9, 16, 25]

const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // Saída: [2, 4]

const primeiroPar = numeros.find(num => num % 2 === 0);
console.log(primeiroPar); // Saída: 2

const soma = numeros.reduce((acc, num) => acc + num, 0);
console.log(soma); // Saída: 15

const todosPares = numeros.every(num => num % 2 === 0);
console.log(todosPares); // saida: false

const algumPar = numeros.some(num => num % 2 === 0);
console.log(algumPar); // saida: true
``` 

## 6. Array Loops

* **O que são**: Loops de array são construções de linguagem que permitem iterar sobre arrays e executar código para cada elemento.
* **Como funcionam**:
    * ``forEach()``: Executa uma função para cada elemento do array.
    * ``for...of``: Itera sobre os valores de um array.
    * ``for...in``: itera sobre as chaves de um objeto.
    * É possível utilizar a palavra reservada ``break`` dentro de um loop para interromper a sua execução.
    * É possível utilizar a função ``entries()`` em conjunto com o loop for of para obter o index de cada elemento.

``` javascript
const nomes = ["Alice", "Bob", "Charlie"];

nomes.forEach(nome => console.log(nome));
// Saída:
// Alice
// Bob
// Charlie

for (const nome of nomes) {
  console.log(nome);
}
// Saída:
// Alice
// Bob
// Charlie

const pessoa = { nome: "Ana", idade: 30, cidade: "Lisboa" };

for (const chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
// Saída:
// nome Ana
// idade 30
// cidade Lisboa

const numeros = [1, 2, 3, 4, 5];

for (const numero of numeros) {
  console.log(numero);
  if (numero === 3) {
    break;
  }
}
// saida:
// 1
// 2
// 3

for (const [index, nome] of nomes.entries()) {
    console.log(index, nome);
}
// saida:
// 0 Alice
// 1 Bob
// 2 Charlie
``` 

## 7. Promisses & Async/Await

* **O que são**: Promises e async/await são recursos do JavaScript que permitem lidar com operações assíncronas de forma mais legível e organizada.
* **Como funcionam**:
    * **Promises**:
        * Representam o resultado futuro de uma operação assíncrona.
        * Podem estar em um dos três estados: pendente, resolvida ou rejeitada.
        * Usam os métodos ``.then()`` e ``.catch()`` para lidar com resultados e erros.
    * **Async/await**:
        * Simplificam o uso de promises, permitindo escrever código assíncrono como se fosse síncrono.
        * A palavra-chave ``async`` define uma função assíncrona, e ``await`` pausa a execução até que uma promise seja resolvida.
        * É possível utilizar blocos ``try...catch`` para tratamento de erros em funções assíncronas.
    * ``Promise.all()``: É utilizada quando é necessário esperar que multiplas promessas sejam resolvidas, retornando um array com a resposta de cada promessa.

``` javascript
// Promise
const promessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sucesso = true;
    if (sucesso) {
      resolve("Operação concluída com sucesso!");
    } else {
      reject("Ocorreu um erro!");
    }
  }, 1000);
});

promessa
  .then(resultado => console.log(resultado))
  .catch(erro => console.error(erro));

// Async/await
async function realizarOperacaoAsync() {
  try {
    const resultado = await promessa;
    console.log(resultado);
  } catch (erro) {
    console.error(erro);
  }
}

realizarOperacaoAsync();

const promessa1 = Promise.resolve("Promessa 1");
const promessa2 = Promise.resolve("Promessa 2");

Promise.all([promessa1, promessa2]).then(resultados => {
  console.log(resultados); // Saída: ["Promessa 1", "Promessa 2"]
});
``` 