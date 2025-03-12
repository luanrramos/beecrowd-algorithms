var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

 let pi = 3.14159;
 let r = lines.shift()

console.log("VOLUME =", parseFloat((4.0/3) * pi * (r*r*r)).toFixed(3))
