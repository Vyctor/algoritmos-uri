/**
 * Leia 2 valores com uma casa decimal (x e y), que devem
 * representar as coordenadas de um ponto em um plano.
 * A seguir, determine qual o quadrante ao qual pertence o
 * ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).
 *
 * Se o ponto estiver na origem, escreva a mensagem “Origem”.
 * Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.
 *
 * Entrada
 * A entrada contem as coordenadas de um ponto.
 *
 * Saída
 * A saída deve apresentar o quadrante em que o ponto se encontra.
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const aux = lines.shift().split(" ");

const x = parseFloat(aux.shift());
const y = parseFloat(aux.shift());

const origem = (x, y) => (x === 0 && y === 0 ? console.log("Origem") : null);
const q1 = (x, y) => (x > 0 && y > 0 ? console.log("Q1") : null);
const q2 = (x, y) => (x < 0 && y > 0 ? console.log("Q2") : null);
const q3 = (x, y) => (x < 0 && y < 0 ? console.log("Q3") : null);
const q4 = (x, y) => (x > 0 && y < 0 ? console.log("Q4") : null);
const eixoX = (x, y) => (x === 0 && y !== 0 ? console.log("Eixo Y") : null);
const eixoY = (x, y) => (y === 0 && x !== 0 ? console.log("Eixo X") : null);

const quadranteCoordenadas = (x, y) => {
    origem(x, y);
    q1(x, y);
    q2(x, y);
    q3(x, y);
    q4(x, y);
    eixoX(x, y);
    eixoY(x, y);
};

quadranteCoordenadas(x, y);