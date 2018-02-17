function wordsUppercase(text) {
	let upper = text.toUpperCase();
	let words = extractWord();
	words = words.filter(a => a !== '');
	
	function extractWord() {
		return upper.split(/\W+/);
	}
	return words.join(', ');
}


console.log(wordsUppercase('Hi, how are you?'));