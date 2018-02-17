function expressionSplit(str) {
	let regex = /[(),;.\s]+/;
	let result = str.split(regex).filter(a => a !== "");
	
	return result.join("\n");
}

console.log(expressionSplit('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}'));