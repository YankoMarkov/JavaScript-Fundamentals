function sortArrayBy2Criteria(arr) {
	arr.sort();
	
	arr.sort((a, b) => {
		if (a.length < b.length) {
			return -1;
		} else if (a.length > b.length) {
			return 1;
		} else {
			return 0;
		}
	});
	
	return arr.join("\n");
}

console.log(sortArrayBy2Criteria(['aldfgpha', 'beta', 'torgto', 'samon', 'gamma']));