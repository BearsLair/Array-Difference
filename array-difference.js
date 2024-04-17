function arrayDiff(a, b) {}

console.log(arrayDiff([1, 2], [1])); // [2]
console.log(arrayDiff([1, 2, 2], [1])); // [2, 2]
console.log(arrayDiff([1, 2, 2], [2])); //[1]
console.log(arrayDiff([1, 2, 2], [])); // [1, 2, 2]
console.log(arrayDiff([], [1, 2])); // []
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]
