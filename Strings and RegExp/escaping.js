function escaping(arr) {
	let result = "<ul>\n";
	
	for (let str of arr) {
		result += `  <li>${htmlEscape(str)}</li>\n`;
	}
	result += "</ul>";
	return result;
	
	function htmlEscape(text) {
		let map = {
			'"': '&quot;', '&': '&amp;',
			"'": '&#39;', '<': '&lt;', '>': '&gt;'
		};
		return text.replace(/[\"&'<>]/g, ch => map[ch]);
	}
}

console.log(escaping(['<b>unescaped text</b>', 'normal text']));