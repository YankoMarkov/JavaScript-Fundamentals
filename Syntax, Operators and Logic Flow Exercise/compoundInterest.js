function compoundInterest(arr) {
	let sum = arr[0];
	let interestRate = arr[1] / 100;
	let frequency = 12 / arr[2];
	let years = arr[3];
	
	return (sum * Math.pow((1 + (interestRate / frequency)), (frequency * years))).toFixed(2);
}

console.log(compoundInterest([1500, 4.3, 3, 6]));