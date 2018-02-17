function usernames(arr) {
	let set = new Set();
	
	for (let user of arr) {
		set.add(user);
	}
	
	let result = [...set]
		.sort((a, b) => {
			if (a.length < b.length) {
				return -1;
			} else if (a.length > b.length) {
				return 1;
			} else {
				if (a < b) {
					return -1;
				} else if (a > b) {
					return 1;
				} else {
					return 0;
				}
			}
		});
	
	return result.join("\n");
}

console.log(usernames([
	'Denise',
	'Ignatius',
	'Iris',
	'Isacc',
	'Indie',
	'Dean',
	'Donatello',
	'Enfuego',
	'Benjamin',
	'Biser',
	'Bounty',
	'Renard',
	'Rot'
]));