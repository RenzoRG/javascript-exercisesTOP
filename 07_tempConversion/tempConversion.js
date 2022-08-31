const ftoc = function(f) {
  const celsiusConversion = ((f - 32) * (5 / 9))
  return Math.round(celsiusConversion * 10)/10
};

const ctof = function(c) {
  const fahrConversion = ((c * 1.8) + 32)
  return Math.round(fahrConversion * 10)/10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
