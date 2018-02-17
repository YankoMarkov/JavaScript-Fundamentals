function cookingByNumbers(arr) {
	let res = Number(arr[0]);
	for (let i = 1; i < arr.length; i++) {
		res = operation(res, arr[i]);
		console.log(res);
	}
	
	function operation(num, operation) {
		switch (operation) {
			case "chop": return num / 2;
			case "dice": return Math.sqrt(num);
			case "spice": return num + 1;
			case "bake": return num * 3;
			case "fillet": return num - ((num * 20) / 100);
		}
	}
}

cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']);