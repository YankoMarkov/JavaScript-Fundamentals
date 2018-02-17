function scoreToHtml(str) {
	let arr = JSON.parse(str);
	let result = "<table>\n";
	result += "  <tr><th>name</th><th>score</th></tr>\n";
	
	for (let obj of arr) {
		let name = htmlEscape(obj["name"]);
		result += `  <tr><td>${name}</td><td>${obj["score"]}</td></tr>\n`;
	}
	result += "</table>";
	return result;
	
	function htmlEscape(text) {
		let map = {
			'"': '&quot;', '&': '&amp;',
			"'": '&#39;', '<': '&lt;', '>': '&gt;'
		};
		return text.replace(/["&'<>]/g, ch => map[ch]);
	}
}

console.log(scoreToHtml('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]'));