function figureOf4Squares(num) {
	let row = 0;
	if (num % 2 === 0) {
		row = num - 1;
	} else {
		row = num;
	}
	let col = 2 * num - 1;
	
	let result = "";
	for (let i = 0; i < 2; i++) {
		result += "+" + "-".repeat((col - 3) / 2) + "+" + "-".repeat((col - 3) / 2) + "+";
		result += "\n";
		if (row > 3) {
			for (let j = 0; j < (row - 3) / 2; j++) {
				result += "|" + " ".repeat((col - 3) / 2) + "|" + " ".repeat((col - 3) / 2) + "|";
				result += "\n"
			}
		}
	}
	result += "+" + "-".repeat((col - 3) / 2) + "+" + "-".repeat((col - 3) / 2) + "+";
	return result;
}

console.log(figureOf4Squares(200));