function capitalizeTheWords(str) {
	let result = [];
	let arr = str.toLowerCase().split(" ").forEach(a => {
		result.push(a = a[0].toUpperCase() + a.slice(1));
	});
	
	return result.join(" ");
}

console.log(capitalizeTheWords('Was that Easy? tRY thIs onE for SiZe!'
));