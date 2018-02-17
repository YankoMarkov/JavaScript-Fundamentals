function magicMatrices(arr) {
	let totalSum = arr[0].reduce((a, b) => a + b);
	let rowSum = 0;
	let colSum = 0;
	for (let row = 0; row < arr.length; row++) {
		rowSum = arr[row].reduce((a, b) => a + b);
		for (let col = 0; col < arr.length; col++) {
			colSum += arr[col][row];
		}
		if (rowSum !== totalSum || colSum !== totalSum) {
			return false;
		}
		colSum = 0;
	}
	return true;
}

console.log(magicMatrices([[1, 0, 0],
	[0, 0, 1],
	[0, 1, 0]]
));