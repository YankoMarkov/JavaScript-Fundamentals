function autoEngineeringCompany(arr) {
	let map = new Map();
	
	for (let str of arr) {
		let strArr = str.split(" | ");
		if (!map.has(strArr[0])) {
			map.set(strArr[0], new Map());
		}
		if (!map.get(strArr[0]).has(strArr[1])) {
			map.get(strArr[0]).set(strArr[1], 0);
		}
		let value = map.get(strArr[0]).get(strArr[1]);
		map.get(strArr[0]).set(strArr[1], value + Number(strArr[2]));
	}
	for (let [k, v] of map) {
		console.log(k);
		for (let [key, val] of v) {
			console.log(`###${key} -> ${val}`);
		}
	}
}

autoEngineeringCompany([
	'Audi | Q7 | 1000',
	'Audi | Q6 | 100',
	'BMW | X5 | 1000',
	'BMW | X6 | 100',
	'Citroen | C4 | 123',
	'Volga | GAZ-24 | 1000000',
	'Lada | Niva | 1000000',
	'Lada | Jigula | 1000000',
	'Citroen | C4 | 22',
	'Citroen | C5 | 10'
]);