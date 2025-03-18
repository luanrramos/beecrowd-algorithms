var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let inputt = lines.shift();
let arr = inputt.split(' ');
let A = parseFloat(arr.shift());
let B = parseFloat(arr.shift());
let C = parseFloat(arr.shift());


console.log("TRIANGULO:", ((A * C) /2).toFixed(3));
console.log("CIRCULO:", ((3.14159 * (C*C))).toFixed(3));
console.log("TRAPEZIO:", (((A+B) * C)/2).toFixed(3));
console.log("QUADRADO:", (B*B).toFixed(3));
console.log("RETANGULO:", (A*B).toFixed(3))
