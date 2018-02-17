function findVariableNamesInSentences(str) {
	let result = [], match;
	let regex = /_[a-zA-Z0-9]+/g;
	
	while (match = regex.exec(str)) {
		result.push(match[0]);
	}
	
	return result.map(a => a.slice(1)).join(",");
}

console.log(findVariableNamesInSentences('Calculate the _area of the _perfectRectangle object.'));