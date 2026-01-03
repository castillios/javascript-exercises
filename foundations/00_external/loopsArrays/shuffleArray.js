function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5)
}


let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffleArray(testArr));

