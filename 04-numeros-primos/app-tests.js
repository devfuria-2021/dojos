const app = require("./app.js");

let correto = true;
let errado = false;

console.log(correto == app.ehPrimo(7));
console.log(correto == app.ehPrimo(11));

console.log(errado == app.ehPrimo(6));
console.log(errado == app.ehPrimo(10));

console.log(correto == app.ehPrimo(1));
