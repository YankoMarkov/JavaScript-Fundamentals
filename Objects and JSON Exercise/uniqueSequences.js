function uniqueSequences(arr) {
	let result = [];
	
	for (let str of arr) {
		let newArr = JSON.parse(str)
			.map(Number)
			.sort((a, b) => b - a);
		let currSum = newArr.reduce((a, b) => a + b);
		if (!result.find(arr => arr.reduce((a, b) => a + b) === currSum)) {
			result.push(newArr);
		}
	}
	result.sort((a, b) => a.length > b.length)
		.forEach(arr => console.log(`[${arr.join(", ")}]`));
	
}

uniqueSequences([
	'[-3, -2, -1, 0, 1, 2, 3, 4]',
	'[10, 1, -17, 0, 2, 13]',
	'[4, -3, 3, -2, 2, -1, 1, 0]'

]);