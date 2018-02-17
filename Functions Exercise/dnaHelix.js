function dnaHelix(num) {
	let sequence = "ATCGTTAGGG";
	let seqLength = sequence.length;
	let index = 0;
	for (let i = 1; i <= num; i++) {
		let firstSymbol = sequence.charAt(index % seqLength);
		let secondSymbol = sequence.charAt((index + 1) % seqLength);
		if (i % 4 === 1) {
			console.log(`**${firstSymbol}${secondSymbol}**`);
		}
		if (i % 4 === 2 || i % 4 === 0) {
			console.log(`*${firstSymbol}--${secondSymbol}*`);
		}
		if (i % 4 === 3) {
			console.log(`${firstSymbol}----${secondSymbol}`)
		}
		index += 2;
	}
}

dnaHelix(10);