const display = document.getElementById("display");
const number1 = document.getElementById("txt-number1");
const number2 = document.getElementById("txt-number2");

const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const btnTimes = document.getElementById("btn-times");
const btnDivided = document.getElementById("btn-divided");


btnPlus.onclick = function () {

    let a = parseInt(number1.value);
    let b = parseInt(number2.value);

    let resultado = somar(a, b) ;
    display.value = resultado;
}

btnMinus.onclick = function () {
    let a = parseInt(number1.value);
    let b = parseInt(number2.value);

    let resultado = subtrair(a, b) ;
    display.value = resultado;
}

btnTimes.onclick = function () {
    let a = parseInt(number1.value);
    let b = parseInt(number2.value);

    let resultado = multiplicar(a, b) ;
    display.value = resultado;
}

btnDivided.onclick = function () {
    let a = parseInt(number1.value);
    let b = parseInt(number2.value); 

    let resultado = dividir(a, b) ;
    display.value = resultado;
}

