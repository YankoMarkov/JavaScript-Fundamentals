function populationsInTowns(arr) {
	let map = new Map();
	
	for (let str of arr) {
		let strArr = str.split(" <-> ");
		if (!map.has(strArr[0])) {
			map.set(strArr[0], 0);
		}
		let value = Number(strArr[1]);
		map.set(strArr[0], map.get(strArr[0]) + value);
		
	}
	for (let [k, v] of map) {
		console.log(`${k} : ${v}`);
	}
}

populationsInTowns([
	'Sofia <-> 1200000',
	'Montana <-> 20000',
	'New York <-> 10000000',
	'Washington <-> 2345000',
	'Las Vegas <-> 1000000'
]);