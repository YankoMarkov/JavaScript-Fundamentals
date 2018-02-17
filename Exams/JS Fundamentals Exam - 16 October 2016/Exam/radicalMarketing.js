function radicalMarketing(arr) {
	let log = new Map();
	let allPersons = [];
	
	for (let str of arr) {
		let person = str.split("-");
		if (person.length === 1) {
			if (!log.has(person[0])) {
				log.set(person[0], new Set());
			}
		} else {
			if (person[0] === person[1]) {
				continue;
			}
			if (!log.has(person[0]) || !log.has(person[1])) {
				continue;
			}
			log.get(person[0]).add(person[1]);
			allPersons.push(person[1]);
		}
	}
	let count = 1;
	let map = new Map();
	allPersons = allPersons.sort();
	for (let i = 0; i < allPersons.length - 1; i++) {
		if (allPersons[i] === allPersons[i + 1]) {
			map.set(allPersons[i], ++count);
		} else {
			count = 1;
		}
	}
	let max = 0;
	let person = "";
	for (let [key, val] of map) {
		if (val > max) {
			max = val;
			person = key;
		}
	}
	let result = [];
	for (let [key, val] of log) {
		for (let obj of val) {
			if (obj === person) {
				result.push(key);
			}
		}
	}
	let num = 1;
	console.log(person);
	for (let obj of result) {
		console.log(`${num++}. ${obj}`);
	}
}

radicalMarketing([
	'A',
	'B',
	'C',
	'A-B',
	'B-A',
	'A-C'

]);