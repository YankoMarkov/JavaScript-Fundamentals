function gradsToDegrees(grad) {
	let degrees = grad * 0.9;
	let x = degrees % 360;
	if (grad >= 0) {
		console.log(x);
	} else {
		console.log(360 + x);
	}
}

console.log(gradsToDegrees(-50));