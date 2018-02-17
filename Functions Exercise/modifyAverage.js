function modifyAverage(num) {
	let result = num.toString();
	let sum = 0;
	while (sum / result.length <= 5) {
		sum = 0;
		for (let digit of result) {
			sum += Number(digit);
		}
		if (sum / result.length <= 5) {
			result += "9";
		}
	}
	return result;
}

console.log(modifyAverage(5835));