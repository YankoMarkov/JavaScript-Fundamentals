function storeCatalogue(arr) {
	arr.sort();
	let map = new Map();
	let tempArr = [];
	
	for (let str of arr) {
		if (!map.has(str[0])) {
			tempArr = [];
			map.set(str[0], tempArr);
		}
		tempArr.push(str.split(" : ").join(": "));
		map.set(str[0], tempArr);
	}
	for (let [k, v] of map) {
		console.log(k);
		for (let str of v) {
			console.log("  " + str);
		}
	}
}

storeCatalogue([
	'Appricot : 20.4',
	'Fridge : 1500',
	'TV : 1499',
	'Deodorant : 10',
	'Boiler : 300',
	'Apple : 1.25',
	'Anti-Bug Spray : 15',
	'T-Shirt : 10'
]);