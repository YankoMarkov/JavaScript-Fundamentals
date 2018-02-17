function systemComponents(arr) {
	let map = new Map();
	let tempArr = [];
	
	for (let str of arr) {
		let strArr = str.split(" | ");
		if (!map.has(strArr[0])) {
			map.set(strArr[0], new Map());
		}
		if (!map.get(strArr[0]).has(strArr[1])) {
			tempArr = [];
			map.get(strArr[0]).set(strArr[1], tempArr);
		}
		tempArr = map.get(strArr[0]).get(strArr[1]);
		tempArr.push(strArr[2]);
		map.get(strArr[0]).set(strArr[1], tempArr);
	}
	let sortFirstMap = new Map([...map]
		.sort((a, b) => {
			if (a[1].size < b[1].size) {
				return 1;
			} else if (a[1].size > b[1].size) {
				return -1;
			} else {
				if (a[0] < b[0]) {
					return -1;
				} else if (a[0] > b[0]) {
					return 1;
				} else {
					return 0;
				}
			}
		})
	);
	
	for (let [key, val] of sortFirstMap) {
		console.log(key);
		let value = [...val].sort((a, b) => {
			if (a[1].length < b[1].length) {
				return 1;
			} else if (a[1].length > b[1].length) {
				return -1;
			} else {
				return 0;
			}
		});
		for (let [k, v] of value) {
			console.log(`|||${k}`);
			for (let x of v) {
				console.log(`||||||${x}`);
			}
		}
	}
}

systemComponents([
	'SULS | Main Site | Home Page',
	'SULS | Main Site | Login Page',
	'SULS | Main Site | Register Page',
	'SULS | Judge Site | Login Page',
	'SULS | Judge Site | Submittion Page',
	'Lambda | CoreA | A23',
	'SULS | Digital Site | Login Page',
	'Lambda | CoreB | B24',
	'Lambda | CoreA | A24',
	'Lambda | CoreA | A25',
	'Lambda | CoreC | C4',
	'Indice | Session | Default Storage',
	'Indice | Session | Default Security'
]);