const reverseString = function(str) {
    result = "";
    // or turn string into array to use reverse() method
    for (let i = str.length - 1; i > -1; i--) {
        result += str[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
