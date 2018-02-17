function rounding(arr) {
	let precision = arr[1];
	if (precision > 15) {
		precision = 15;
	}
	console.log(Number(arr[0].toFixed(precision)));
}

rounding([10.65876, 3]);