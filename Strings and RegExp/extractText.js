function extractText(str) {
	let startIndex = str.indexOf("(");
	let arr = [];
	
	while (startIndex > -1) {
		let endIndex = str.indexOf(")", startIndex + 1);
		if (endIndex === -1) {
			break;
		}
		let word = str.substring(startIndex + 1, endIndex);
		arr.push(word);
		startIndex = str.indexOf("(", endIndex);
	}
	return arr.join(", ");
}

console.log(extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'));