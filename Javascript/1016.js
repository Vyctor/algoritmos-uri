/**
 * Distância
 * Dois carros (X e Y) partem em uma mesma direção. O carro X sai com velocidade constante de 60 Km/h e o carro Y sai
 * com velocidade constante de 90 Km/h.
 * Em uma hora (60 minutos) o carro Y consegue se distanciar 30 quilômetros do carro X,
 * ou seja, consegue se afastar um quilômetro a cada 2 minutos.
 * Leia a distância (em Km) e calcule quanto tempo leva (em minutos) para o carro Y tomar essa distância do outro carro.
 */

const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split("\n");

const qtdMinutos = input * 2;

console.log(qtdMinutos + " minutos");