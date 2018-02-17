function splitStringWithDelimiter(str, delimiter) {
	str = str.split(delimiter);
	
	return str.join("\n");
}

console.log(splitStringWithDelimiter('One-Two-Three-Four-Five',
	'-'
));