const repeatString = function(str, rep) {
    if (rep < 0) {
        return 'ERROR';
    }

    let result = "";
    for (let i = 0; i < rep; i++) {
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
