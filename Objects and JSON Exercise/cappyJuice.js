function cappyJuice(arr) {
	let result = new Map();
	let map = new Map();
	
	for (let str of arr) {
		let strArr = str.split(" => ");
		if (!map.has(strArr[0])) {
			map.set(strArr[0], 0);
		}
		map.set(strArr[0], map.get(strArr[0]) + Number(strArr[1]));
		
		let count = 1;
		let quantity = map.get(strArr[0]);
		
		while (quantity >= 1000) {
			quantity -= 1000;
			result.set(strArr[0], count++);
		}
	}
	for (let [k, v] of result) {
		console.log(`${k} => ${v}`);
	}
}

cappyJuice([
	'Kiwi => 234',
	'Pear => 2345',
	'Watermelon => 3456',
	'Kiwi => 4567',
	'Pear => 5678',
	'Watermelon => 6789'
]);