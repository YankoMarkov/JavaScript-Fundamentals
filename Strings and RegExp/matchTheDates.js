function matchTheDates(arr) {
	let pattern = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
	let dates = [], match;
	for (let sentence of arr) {
		
		while (match = pattern.exec(sentence)) {
			dates.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
		}
	}
	return dates.join("\n");
}

console.log(matchTheDates(['1-Jan-1999 is a valid date.',
		'So is 01-July-2000.',
		'I am an awful liar, by the way – Ivo, 28-Sep-2016.'
	]
));