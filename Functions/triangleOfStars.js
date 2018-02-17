function triangleOfStars(num) {
	let res = "";
	for (let i = 1; i <= num; i++) {
		res += "*".repeat(i);
		res += "\n";
	}
	for (let i = num - 1; i >= 1; i--) {
		res += "*".repeat(i);
		res += "\n";
	}
	return res;
}

console.log(triangleOfStars(3));