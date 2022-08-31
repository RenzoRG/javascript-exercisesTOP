const repeatString = function(string, num) {
    let sumOfString = ""
    for (let i = 0; i < num; i++){
        sumOfString += string
    }
    if (num < 0) {
        return "ERROR"
    } else return sumOfString
};

// Do not edit below this line
module.exports = repeatString;
