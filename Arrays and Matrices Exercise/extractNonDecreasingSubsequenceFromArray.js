function extractNonDecreasingSubsequenceFromArray(arr) {
	let resultArr = [arr[0]];
	
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] >= resultArr[resultArr.length - 1]) {
			resultArr.push(arr[i]);
		}
	}
	return resultArr.join("\n");
}

console.log(extractNonDecreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));