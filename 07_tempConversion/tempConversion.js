const convertToCelsius = function(tempF) {
  console.log(((tempF-32)*5/9).toFixed(1));
  return Math.round(((tempF-32)*5/9)*10)/10;
};

const convertToFahrenheit = function(tempC) {
  console.log(tempC*(9/5)+32);
  return Math.round((tempC*(9/5)+32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
