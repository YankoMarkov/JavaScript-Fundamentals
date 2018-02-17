function negativeToPositiveNumbers(arr) {
	let newArr = [];
	for (let num of arr) {
		if (num < 0) {
			newArr.unshift(num);
		} else {
			newArr.push(num);
		}
	}
	return newArr.join("\n");
}

console.log(negativeToPositiveNumbers([7, -2, 8, 9]));