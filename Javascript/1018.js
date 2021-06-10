var input = require("fs").readFileSync("/dev/stdin", "utf8");

let dinheiro = parseInt(input);
const arrayCedulas = [100, 50, 20, 10, 5, 2, 1];

console.log(dinheiro);

for (let cedula of arrayCedulas) {
    let qtd = parseInt(dinheiro / cedula);
    console.log(`${qtd} nota(s) de R$ ${cedula},00`);
    dinheiro = dinheiro % cedula;
}