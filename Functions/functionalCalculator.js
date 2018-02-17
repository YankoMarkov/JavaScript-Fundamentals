function functionalCalculator(num1, num2, str) {
	function doIt(operation) {
		return operation(num1, num2);
	}
	
	let add = function (num1, num2) {
		return num1 + num2;
	};
	let subtract = function (num1, num2) {
		return num1 - num2;
	};
	let multiply = function (num1, num2) {
		return num1 * num2;
	};
	let divide = function (num1, num2) {
		return num1 / num2;
	};
	
	switch (str) {
		case "+":
			return doIt(add);
		case "-":
			return doIt(subtract);
		case "*":
			return doIt(multiply);
		case "/":
			return doIt(divide);
	}
}

console.log(functionalCalculator(10, 8, "+"));