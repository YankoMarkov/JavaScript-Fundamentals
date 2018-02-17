function biggestElement(arr) {
	
	return Math.max.apply(null, arr.reduce((row1, row2) => row1.concat(row2)));
	
}

console.log(biggestElement([[3, 5, 7, 12],
	[-1, 4, 33, 2],
	[8, 3, 0, 4]]

));