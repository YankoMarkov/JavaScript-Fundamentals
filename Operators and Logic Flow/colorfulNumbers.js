function colorfulNumbers(n) {
	let res = "<ul>\n";
	for (let i = 1; i <= n; i++) {
		let color = "green";
		if (i % 2 === 0) {
			color = "blue";
		}
		res += `  <li><span style='color:${color}'>${i}</span></li>\n`;
	}
	res += "</ul>";
	
	return res;
}

console.log(colorfulNumbers(10));