const palindromes = function (str) {
    parsedStr = str.split('').filter(char => {
        return /[a-zA-Z0-9]/.test(char);
    }).join('');
    let revStr = "";
    for (let i = parsedStr.length - 1; i > -1; i--) {
        revStr += parsedStr[i];
    }
    if (revStr.toLowerCase() === parsedStr.toLowerCase()) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
