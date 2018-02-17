function squareOfStars(num) {
	let res = "";
	for (let i = 0; i < num; i++) {
		res += "*" + " *".repeat(num - 1);
		res += "\n";
	}
	return res;
}

console.log(squareOfStars(5));