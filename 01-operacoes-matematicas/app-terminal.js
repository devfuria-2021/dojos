const app = require("./app");

let a = parseInt(process.argv[3], 10);
let b = parseInt(process.argv[4], 10);
let operacao = process.argv[2];

let resultado = 0;

switch (operacao) {
    case "add":
        resultado = a + b;
        break;
    case "dim":
        resultado = app.subtrair(a, b);
        break;
    case "mult":
        resultado = app.multiplicar(a, b);
        break;
    case "div":
        resultado = app.dividir(a, b);
        break;
    default:
        console.log("operação desconhecida");
        break;
}

console.log(resultado);