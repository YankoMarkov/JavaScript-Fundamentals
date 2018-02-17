function spiralMatrix(rows, cols) {
	let arr = [];
	let num = 1;
	let end = rows * cols;
	for (let row = 0; row < rows; row++) {
		let tempArr = [];
		for (let col = 0; col < cols; col++) {
			tempArr.push(0);
		}
		arr.push(tempArr);
	}
	let row = 0;
	let col = 0;
	let step = 0;
	
	while (num <= end) {
		while (col + step < cols) {
			arr[row][col] = num++;
			col++;
		}
		row++;
		col--;
		while (row + step < rows) {
			arr[row][col] = num++;
			row++;
		}
		row--;
		col--;
		while (col >= step) {
			arr[row][col] = num++;
			col--;
		}
		row--;
		col++;
		step++;
		while (row >= step) {
			arr[row][col] = num++;
			row--;
		}
		row++;
		col++;
	}
	arr.forEach(row => console.log(row.join(" ")));
}

spiralMatrix(5, 5);