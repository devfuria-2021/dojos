const app = require("./app.js");

let a = process.argv[2];
let b = process.argv[3];
let c = process.argv[4];

console.log("Delta: ", app.delta(a, b, c));
console.log("x1: ", app.raiz1(a, b, c));
console.log("x2: ", app.raiz2(a, b, c));
