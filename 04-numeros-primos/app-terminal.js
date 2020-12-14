const app = require("./app.js");

let num = process.argv[2];

//console.log(app.ehPrimo(num));

if (app.ehPrimo(num)){
    console.log(num + ' é primo!');
} else {
    console.log(num + ' não é primo!');
}