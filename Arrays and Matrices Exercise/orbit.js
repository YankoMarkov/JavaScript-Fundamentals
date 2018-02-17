function orbit(arr) {
	let rows = arr[0];
	let cols = arr[1];
	let starRow = arr[2];
	let starCol = arr[3];
	let matrix = [];
	
	for (let i = 0; i < rows; i++) {
		matrix.push("0".repeat(cols).split("").map(Number));
	}
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
		}
	}
	console.log(matrix.map(row => row.join(" ")).join("\n"));
}

orbit([5, 5, 2, 2]);