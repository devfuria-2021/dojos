
const ehPrimo = function (num) {
    let i;
    let qtdeDivisores = 0;

    if (num == 1) {
        return true;
    }

    for (i = 1; i <= num; i++) {
        if (ehDivisaoExata(num, i)) {
            qtdeDivisores++;
        }
    }

    if (qtdeDivisores == 2) {
        return true;
    } else {
        return false;
    }

}

// Função que descobre se dois números possuem divisão exata.
//
// Retorna:
//   0 para false
//   1 para true
//
var ehDivisaoExata = function (dividendo, divisor) {
    return (dividendo % divisor == 0);
}

module.exports = { ehPrimo }
