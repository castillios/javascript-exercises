function uniqueElements(arr) {
    const elements = new Set();
    let uniqueStrings = []
    for (let i = 0; i < arr.length; i++) {
        if (!elements.has(arr[i])) {
            uniqueStrings.push(arr[i]);
        }
        elements.add(arr[i]);
    }

    return uniqueStrings;
}


let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(uniqueElements(strings));
