
const delta = function (a, b, c) {
    return b * b - 4 * a * c;
}

// Retorna o valor da primeira raiz
const raiz1 = function (a, b, c) {
    return (-b + Math.sqrt(delta(a, b, c))) / 2 * a;
}

// Retorna o valor da segunda raiz
const raiz2 = function (a, b, c) {
    return (-b - Math.sqrt(delta(a, b, c))) / 2 * a;
}

// console.log( raiz2(1, 0, -16)  );

module.exports = { delta, raiz1, raiz2 }

