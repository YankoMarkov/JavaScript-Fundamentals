function townsToJson(arr) {
	arr.shift();
	let towns = [];
	
	for (let str of arr) {
		let [town, latitude, longitude] = str.split("|").filter(a => a !== "").map(a => a.trim());
		
		let townObj = {
			Town: town,
			Latitude: Number(latitude),
			Longitude: Number(longitude)
		};
		towns.push(townObj);
	}
	return JSON.stringify(towns);
}

console.log(townsToJson(['| Town | Latitude | Longitude |',
	'| Sofia | 42.696552 | 23.32601 |',
	'| Beijing | 39.913818 | 116.363625 |']
));