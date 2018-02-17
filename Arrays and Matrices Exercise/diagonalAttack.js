function diagonalAttack(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].split(" ").map(Number);
	}
	let firstDiagonal = 0;
	let secondDiagonal = 0;
	for (let row = 0; row < arr.length; row++) {
		firstDiagonal += arr[row][row];
		secondDiagonal += arr[row][arr.length - 1 - row];
	}
	if (firstDiagonal !== secondDiagonal) {
		arr.forEach(e => console.log(e.join(" ")));
	} else {
		for (let row = 0; row < arr.length; row++) {
			for (let col = 0; col < arr[row].length; col++) {
				if (row !== col) {
					if (col !== arr.length - 1 - row) {
						arr[row][col] = firstDiagonal;
					}
				}
			}
		}
		arr.forEach(e => console.log(e.join(" ")));
	}
}

diagonalAttack(['5 3 12 3 1',
	'11 4 23 2 5',
	'101 12 3 21 10',
	'1 4 5 2 2',
	'5 22 33 11 1']
);