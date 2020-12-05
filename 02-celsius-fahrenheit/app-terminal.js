const app = require("./app");

let opt = process.argv[2];
let value = parseFloat(process.argv[3], 10);

let resultado = undefined;

if (opt == "to-cel") {
    resultado = app.toCelsius(value)
}

if (opt == "to-fah") {
    resultado = app.toFahrenheit(value)
};

console.log(resultado)