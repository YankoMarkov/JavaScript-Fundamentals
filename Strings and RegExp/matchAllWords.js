function matchAllWords(str) {
	str = str.split(/\W+/).filter(a => a !== "").join("|");
	
	return str;
}

console.log(matchAllWords("Some random words and letters and other things. In a sentence, also there are some signs like + or ? Sentences can also have semicolons; or dots. and !"));