function binaryLogarithm(arr) {
	for (let num of arr) {
		console.log(Math.log2(num));
	}
}

console.log(binaryLogarithm([1024, 1048576, 256, 1, 2]));