function equalNeighbors(arr) {
	let count = 0;
	
	for (let row = 0; row < arr.length - 1; row++) {
		for (let col = 0; col < arr[row].length; col++) {
			if (arr[row][col] === arr[row][col + 1]) {
				count++;
			}
			if (arr[row][col] === arr[row + 1][col]) {
				count++;
			}
			if (row === arr.length - 2) {
				if (arr[row + 1][col] === arr[row + 1][col + 1]){
					count++;
				}
			}
		}
	}
	return count;
}

console.log(equalNeighbors([[2, 2, 5, 7, 4],
	[4, 0, 5, 3, 4],
	[2, 5, 5, 4, 2]]
));