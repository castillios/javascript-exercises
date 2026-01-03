function filterRangeInPlace(arr, low, high) {

    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];
        if ((curNum < low) || (curNum > high)) {
            arr.splice(i, 1);
            i--;
        }
    }

    return arr;
}

let testArr = [5, 3, 8, 1];
console.log(filterRangeInPlace(testArr, 1, 4));
console.log(testArr);
