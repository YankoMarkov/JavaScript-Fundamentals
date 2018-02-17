function triangleOfDollars(num) {
	let res = "";
	for (let i = 0; i < num; i++) {
		for (let j = 0; j < i + 1; j++) {
			res += "$";
		}
		res += "\n";
	}
	return res;
}

console.log(triangleOfDollars(4));