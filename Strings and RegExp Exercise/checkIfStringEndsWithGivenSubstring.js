function checkIfStringEndsWithGivenSubstring(str, subStr) {
	return str.endsWith(subStr);
}

console.log(checkIfStringEndsWithGivenSubstring('This sentence ends with fun?',
	'fun?'
	));