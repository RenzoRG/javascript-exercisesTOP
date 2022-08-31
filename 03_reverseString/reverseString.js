const reverseString = function(inputString) {
    let stringArray = inputString.split('')
    let reverseStr= stringArray.reverse()
    return reverseStr.toString().replaceAll(",","")
};

// Do not edit below this line
module.exports = reverseString;
