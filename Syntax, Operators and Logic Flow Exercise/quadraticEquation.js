function quadraticEquation(a, b, c) {
	let x1 = 0;
	let x2 = 0;
	let d = (b * b) - (4 * a * c);
	if (d > 0) {
		x1 = (-b + Math.sqrt(d)) / (2 * a);
		x2 = (-b - Math.sqrt(d)) / (2 * a);
		if (x1 <= x2) {
			console.log(x1);
			console.log(x2);
		} else {
			console.log(x2);
			console.log(x1);
		}
	} else if (d < 0) {
		console.log("No");
	} else if (d === 0) {
		x1 = -b / (2 * a);
		console.log(x1);
	}
}

console.log(quadraticEquation(5, 2, 1));