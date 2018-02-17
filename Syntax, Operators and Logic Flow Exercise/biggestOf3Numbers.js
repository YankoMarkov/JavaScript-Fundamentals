function biggestOf3Numbers(arr) {
	let maxNum = Number.MIN_SAFE_INTEGER;
	
	for (let num of arr) {
		if (num > maxNum) {
			maxNum = num;
		}
	}
	
	return maxNum;
}

console.log(biggestOf3Numbers([-10, -2, -7]));