function parseTheEmployeeData(arr) {
	let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([A-Za-z0-9 -]+)$/g;
	let result = [], match;
	
	for (let str of arr) {
		
		while (match = regex.exec(str)) {
			result.push(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`);
		}
	}
	return result.join("\n")
}

console.log(parseTheEmployeeData(['Jonathan - 2000 - Manager',
	'Peter- 1000- Chuck',
	'George - 1000 - Team Leader'
]));