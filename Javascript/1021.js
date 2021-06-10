/**
 * Leia um valor de ponto flutuante com duas casas decimais.
 * Este valor representa um valor monetário. A seguir, calcule o menor número de notas
 * e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas
 * são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01.
 * A seguir mostre a relação de notas necessárias.
 *
 * Entrada
 * O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).
 *
 * Saída
 * Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
let dinheiro = parseFloat(input);
const arrayCedulas = [100, 50, 20, 10, 5, 2];
const arrayMoedas = [1.0, 0.5, 0.25, 0.1, 0.05, 0.01];

console.log("NOTAS:");
for (let cedula of arrayCedulas) {
    if (dinheiro >= 2) {
        let qtd = parseInt(dinheiro / cedula);
        console.log(`${qtd} nota(s) de R$ ${cedula.toFixed(2)}`);
        dinheiro = dinheiro % cedula;
    } else {
        console.log(`${0} nota(s) de R$ ${cedula.toFixed(2)}`);
    }
}
console.log("MOEDAS:");
for (let moeda of arrayMoedas) {
    if (dinheiro < 2) {
        let qtd = parseInt(dinheiro / moeda);
        console.log(`${qtd} moeda(s) de R$ ${moeda.toFixed(2)}`);
        dinheiro = (dinheiro % moeda) + 0.00001;
    }
}