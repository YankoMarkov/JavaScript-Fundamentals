function cityMarkets(arr) {
	let map = new Map();
	
	for (let str of arr) {
		str = str.split(" -> ");
		if (!map.has(str[0])) {
			map.set(str[0], new Map());
		}
		if (!map.get(str[0]).has(str[1])) {
			map.get(str[0]).set(str[1], 0);
		}
		let res = str[2].split(" : ").reduce((a, b) => a * b);
		let value = map.get(str[0]).get(str[1]);
		map.get(str[0]).set(str[1], value + res);
	}
	for (let [k, v] of map) {
		console.log(`Town - ${k}`);
		for (let [key, val] of v) {
			console.log(`$$$${key} : ${val}`);
		}
	}
}

cityMarkets([
	'Sofia -> Laptops HP -> 200 : 2000',
	'Sofia -> Raspberry -> 200000 : 1500',
	'Sofia -> Audi Q7 -> 200 : 100000',
	'Montana -> Portokals -> 200000 : 1',
	'Montana -> Qgodas -> 20000 : 0.2',
	'Montana -> Chereshas -> 1000 : 0.3'
]);