// Definir a função
function classificarHeroi(vitorias, derrotas) {

let saldoFinal = vitorias - derrotas;
let nivel;

// Estrutura de decisão
if (vitorias <= 10) {
    nivel = "Ferro";
} else if (vitorias <= 20) {
     nivel = "Bronze";
} else if (vitorias <= 50) {
    nivel = "Prata";
} else if (vitorias <= 80) {
    nivel = "Ouro";
} else if (vitorias <= 90) {
    nivel = "Diamante";
} else if (vitorias <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}

return `O Herói tem de saldo ${saldoFinal} e está no nível ${nivel}`;
}

// Testando a função

let resultado = classificarHeroi(85, 20);
console.log(resultado);