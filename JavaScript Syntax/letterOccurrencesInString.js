function letterOccurrencesInString(inputStr, letter) {
	let count = 0;
	for (let i = 0; i < inputStr.length; i++) {
		if (inputStr[i] === letter) {
			count++;
		}
	}
	return count;
}