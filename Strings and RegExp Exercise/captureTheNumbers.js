function captureTheNumbers(arr) {
	let result = [], match;
	let regex = /\d+/g;
	
	for (let str of arr) {
		while (match = regex.exec(str)) {
			result.push(match[0]);
		}
	}
	return result.join(" ");
}

console.log(captureTheNumbers(['The300',
	'What is that?',
	'I think it’s the 3rd movie.',
	'Lets watch it at 22:45']));