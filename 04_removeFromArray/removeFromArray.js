const removeFromArray = function(array, ...elementToRemove) {
    const result = array.filter(x => !elementToRemove.includes(x))
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
