function fromJsonToHtmlTable(str) {
	let arr = JSON.parse(str);
	let result = "<table>\n";
	let keys = Object.keys(arr[0]);
	result += "  <tr>";
	for (let key of keys) {
		result += `<th>${key}</th>`;
	}
	result += "</tr>\n";
	
	for (let obj of arr) {
		result += "  <tr>";
		for (let key of keys) {
			let k = obj[key];
			result += `<td>${htmlEscape(k.toString())}</td>`;
		}
		result += "</tr>\n";
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

console.log(fromJsonToHtmlTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'));;