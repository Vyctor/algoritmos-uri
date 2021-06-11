/**
 * Com base na tabela abaixo, escreva um programa que leia o código de um item
 * e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.
 *
 * 1 - Cachorro Quente  - R$ 4.00
 * 2 - X-Salada - R$ 4.50
 * 3 - X-Bacon - R$ 5.00
 * 4 - Torrada Simples - R$ 2.00
 * 5 - Refrigerante - R$ 1.50
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const aux = lines.shift().split(" ");

const cardapio = [4.0, 4.5, 5, 2, 1.5];

const a = parseFloat(aux.shift());
const b = parseFloat(aux.shift());

console.log(`Total: R$ ${(cardapio[a - 1] * b).toFixed(2)}`);