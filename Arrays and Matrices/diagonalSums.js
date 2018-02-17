function diagonalSums(arr) {
	let firstSum = 0, secondSum = 0;
	
	for (let row = 0; row < arr.length; row++) {
		firstSum += arr[row][row];
		secondSum += arr[row][arr.length - 1 - row];
	}
	console.log(`${firstSum} ${secondSum}`);
}

diagonalSums([[3, 5, 17],
	[-1, 7, 14],
	[1, -8, 89]]

);