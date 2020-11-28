const app = require("./app");

let resultado = 0;

resultado = app.somar(8, 2);
console.log(10 == resultado);

resultado = app.subtrair(8, 2);
console.log(6 == resultado);

resultado = app.multiplicar(8, 2);
console.log(16 == resultado);

resultado = app.dividir(8, 2);
console.log(4 == resultado);
