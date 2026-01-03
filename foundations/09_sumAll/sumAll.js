const sumAll = function(a, b) {
    if(!(Number.isInteger(a)) || !(Number.isInteger(b)) || ((a < 0) || (b < 0))) return 'ERROR';
    let low = a;
    let high = b;
    if (a > b) {
        high = a;
        low = b;
    }
    let sum = 0;
    for (let i = low; i <= high; i++) {
        sum += i
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
