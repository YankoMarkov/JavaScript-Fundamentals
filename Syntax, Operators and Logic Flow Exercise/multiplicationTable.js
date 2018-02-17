function multiplicationTable(num) {
	let result = '<table border="1">\n';
	let x = "x";
	for (let i = 1; i <= num + 1; i++) {
		result += `  <tr><th>${x}</th>`;
		for (let j = 1; j <= num; j++) {
			if (i === 1) {
				result += `<th>${i * j}</th>`;
			} else {
				result += `<td>${(i - 1) * j}</td>`;
			}
		}
		x = i;
		result += "</tr>\n";
	}
	result += "</table>";
	return result;
}

console.log(multiplicationTable(5));