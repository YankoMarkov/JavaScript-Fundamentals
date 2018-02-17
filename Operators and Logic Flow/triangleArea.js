function triangleArea(a, b, c) {
	let p = (a + b + c) / 2;
	return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

console.log(triangleArea(2, 3.5, 4));