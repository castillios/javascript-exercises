const removeFromArray = function(arr, ...args) {
    result = []
    for (let i = 0; i < arr.length; i++) {
        let curElement = arr[i];
        if (!args.includes(curElement)) {
            result.push(curElement);
        }
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
