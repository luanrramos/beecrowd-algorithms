var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let p1 = lines.shift().split(' ');
let np1 = parseInt(p1[1]);
let vp1 = parseFloat(p1[2]);

let p2 = lines.shift().split(' ');
let np2 = parseInt(p2[1]);
let vp2 = parseFloat(p2[2]);


console.log("VALOR A PAGAR: R$", parseFloat((np1 * vp1) + (np2 * vp2)).toFixed(2));
