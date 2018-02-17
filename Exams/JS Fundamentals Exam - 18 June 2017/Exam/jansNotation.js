function jansNotation(arr) {
	let result = [];
	let operations = {
		"+": (a, b) => a + b,
		"-": (a, b) => a - b,
		"*": (a, b) => a * b,
		"/": (a, b) => a / b
	};
	
	for (let i of arr) {
		let operation = operations[i];
		if (operation === undefined) {
			result.push(i);
		} else {
			let [num2, num1] = [result.pop(), result.pop()];
			if (num2 === undefined || num1 === undefined) {
				console.log("Error: not enough operands!");
				return;
			}
			result.push(operation(num1, num2));
		}
	}
	if (result.length > 1) {
		console.log("Error: too many operands!");
	} else {
		console.log(result.pop());
	}
}

jansNotation([31,
	2,
	'+',
	11,
	'/']

);