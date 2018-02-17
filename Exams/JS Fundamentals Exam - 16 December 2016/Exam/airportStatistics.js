function airportStatistics(arr) {
	let planes = [];
	let cities = new Map();
	
	for (let s of arr) {
		let check = false;
		let str = s.split(" ");
		if (str[3] === "land") {
			if (planes.indexOf(str[0]) > -1) {
				continue;
			}
			planes.push(str[0]);
		} else {
			let index = planes.indexOf(str[0]);
			if (index === -1) {
				continue;
			}
			delete planes[index];
			check = true;
		}
		if (planes.indexOf(str[0]) > -1 || check) {
			if (!cities.has(str[1])) {
				cities.set(str[1], {Arrivals: 0, Departures: 0, Planes: []});
			}
			if (cities.get(str[1]).Planes.indexOf(str[0]) === -1) {
				cities.get(str[1]).Planes.push(str[0]);
				if (str[3] === "land") {
					cities.get(str[1]).Arrivals += Number(str[2]);
				} else {
					cities.get(str[1]).Departures += Number(str[2]);
				}
			} else {
				if (str[3] === "land") {
					cities.get(str[1]).Arrivals += Number(str[2]);
				} else {
					cities.get(str[1]).Departures += Number(str[2]);
				}
			}
		}
	}
	console.log("Planes left:");
	planes.sort((a, b) => mySort(a, b)).forEach(e => console.log(`- ${e}`));
	let map = new Map([...cities].sort((a, b) => {
		if (a[1].Arrivals < b[1].Arrivals) {
			return 1;
		} else if (a[1].Arrivals > b[1].Arrivals) {
			return -1
		} else {
			if (a[0] < b[0]) {
				return -1;
			} else if (a[0] > b[0]) {
				return 1;
			} else {
				return 0;
			}
		}
	}));
	for (let [key, val] of map) {
		console.log(key);
		console.log(`Arrivals: ${val.Arrivals}`);
		console.log(`Departures: ${val.Departures}`);
		console.log("Planes:");
		val.Planes.sort((a, b) => mySort(a, b)).forEach(e => console.log(`-- ${e}`));
	}
	
	function mySort(a, b) {
		if (a.toLowerCase() < b.toLowerCase()) {
			return -1;
		} else if (a.toLowerCase() > b.toLowerCase()) {
			return 1;
		} else {
			return 0;
		}
	}
}

airportStatistics([
	'Airbus Paris 100 land',
	'AirForce Paris 200 land',
	'Airbus Paris -300 land',
	'AirForcE Paris 100 land',
	'AirForce London 100 land',
	'AirFoRce LoNdon 130 land',
	'Nemibue London 150 land',
	'Nemibue London 150 depart'
]);