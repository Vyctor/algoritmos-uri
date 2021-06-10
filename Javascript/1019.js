/**
 * Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica,
 * e informe-o expresso no formato horas:minutos:segundos.
 *
 * Entrada
 * O arquivo de entrada contém um valor inteiro N.
 *
 * Saída
 * Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let tempo = parseInt(input);
let horas = parseInt(tempo / 3600);
tempo = tempo % 3600;
let minutos = parseInt(tempo / 60);
tempo = tempo % 60;
let segundos = parseInt(tempo % 60);
console.log(`${horas.toFixed(0)}:${minutos.toFixed(0)}:${segundos.toFixed(0)}`);