function lastKNumbersSequence(n, k) {
	let arr = [1];
	
	for (let i = 1; i < n; i++) {
		let tempArr = arr.slice(-k);
		arr[i] = tempArr.reduce((a, b) => a + b);
	}
	return arr.join(" ");
}

console.log(lastKNumbersSequence(8, 2));;