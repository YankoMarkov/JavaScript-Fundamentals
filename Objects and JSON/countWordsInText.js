function countWordsInText(arr) {
	let obj = {};
	
	for (let str of arr) {
		let strArr = str.split(/[^\w]+/).filter(e => e !== "");
		for (let s of strArr) {
			if (!obj.hasOwnProperty(s)) {
				obj[s] = 0;
			}
			obj[s] += 1;
		}
	}
	return JSON.stringify(obj);
}

console.log(countWordsInText(['Far too slow, you\'re far too slow.']));