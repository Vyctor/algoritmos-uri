//var input = require("fs").readFileSync("/dev/stdin", "utf8");
//var lines = input.split("\n");
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