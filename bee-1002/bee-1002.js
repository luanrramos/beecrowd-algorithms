const fs = require('fs');

// Lê a entrada do Beecrowd
const input = fs.readFileSync('/dev/stdin', 'utf8');

// Exemplo de processamento (ajuste conforme o problema)
const lines = input.split('\n');
const raio = parseFloat(lines[0]);

const area = 3.14159 * Math.pow(raio, 2);
console.log('A=' + area.toFixed(4));
