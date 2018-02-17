function countWordsWithMaps(arr) {
	let map = new Map();
	
	for (let str of arr) {
		let strArr = str.toLowerCase().split(/[^\w]+/).filter(e => e !== '');
		for (let s of strArr) {
			if (!map.has(s)) {
				map.set(s, 0);
			}
			map.set(s, map.get(s) + 1);
		}
	}
	let resMap = new Map([...map].sort());
	for (let [k, v] of resMap) {
		console.log(`'${k}' -> ${v} times`)
	}
}

countWordsWithMaps(['Far too slow, you\'re far too slow.']);