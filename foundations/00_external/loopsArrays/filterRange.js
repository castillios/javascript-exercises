function filterRange(arr, low, high) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];
        if ((curNum >= low) && (curNum <= high)) {
            result.push(curNum);
        }

    }    
    return result;
}

let testArr = [5, 3, 8, 1];
console.log(filterRange(testArr, 1, 4));
console.log(testArr);
