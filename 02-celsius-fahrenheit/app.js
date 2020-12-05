function toCelsius(fahrenheit) {
    return (fahrenheit - 32) / 9 * 5
}

function toFahrenheit(celsius) {
    return celsius / 5 * 9 + 32
}

module.exports.toCelsius = toCelsius
module.exports.toFahrenheit = toFahrenheit