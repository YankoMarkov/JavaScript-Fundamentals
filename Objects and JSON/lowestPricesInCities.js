function lowestPricesInCities(arr) {
	let map = new Map();
	
	for (let str of arr) {
		str = str.split(" | ");
		let tempArr = [];
		if (!map.has(str[1])) {
			tempArr.push(Number(str[2]));
			tempArr.push(str[0]);
			map.set(str[1], tempArr);
		} else {
			if (str[0] === map.get(str[1])[1]) {
				tempArr.push(Number(str[2]));
				tempArr.push(str[0]);
				map.set(str[1], tempArr);
			}
			if (Number(str[0] !== map.get(str[1])[1] && str[2]) < map.get(str[1])[0]) {
				tempArr.push(Number(str[2]));
				tempArr.push(str[0]);
				map.set(str[1], tempArr);
			}
		}
	}
	for (let [k, v] of map) {
		console.log(`${k} -> ${v[0]} (${v[1]})`);
	}
}

lowestPricesInCities([
	'Sample Town | Sample Product | 1000',
	'Sample Town | Orange | 2',
	'Sample Town | Peach | 1',
	'Sofia | Orange | 3',
	'Sofia | Peach | 2',
	'New York | Sample Product | 1000.1',
	'New York | Burger | 10'
]);
console.log();

lowestPricesInCities([
	'Sofia City | Audi | 100000',
	'Sofia City | BMW | 100000',
	'Sofia City | Mitsubishi | 10000',
	'Sofia City | Mercedes | 10000',
	'Sofia City | NoOffenseToCarLovers | 0',
	'Mexico City | Audi | 1000',
	'Mexico City | BMW | 99999',
	'New York City | Mitsubishi | 10000',
	'New York City | Mitsubishi | 1000',
	'Mexico City | Audi | 100000',
	'Washington City | Mercedes | 1000'
]);