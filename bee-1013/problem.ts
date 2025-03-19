var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let arr = (lines.shift()).split(' ');
let a = parseInt(arr.shift());
let b = parseInt(arr.shift());
let c = parseInt(arr.shift());

let maiorAB = (a+b + Math.abs(a-b)) / 2;

if (maiorAB > c) console.log(maiorAB, "eh o maior");

if (maiorAB < c) console.log(c, "eh o maior");
