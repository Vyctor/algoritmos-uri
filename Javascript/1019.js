var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let tempo = parseInt(input);
let horas = parseInt(tempo / 3600);
tempo = tempo % 3600;
let minutos = parseInt(tempo / 60);
tempo = tempo % 60;
let segundos = parseInt(tempo % 60);
console.log(`${horas.toFixed(0)}:${minutos.toFixed(0)}:${segundos.toFixed(0)}`);