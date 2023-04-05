const convertToCelsius = function(fahrenheit) {
  const celcius = ((fahrenheit - 32) * (5 / 9)).toFixed(1);
  return Number.parseFloat(celcius);
};

const convertToFahrenheit = function(celcius) {
  const fahrenheit = (celcius * (9/5) + 32).toFixed(1);
  return Number.parseFloat(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
