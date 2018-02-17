function aggregateTable(arr) {
	let sum = 0;
	let towns = [];
	
	for (let str of arr) {
		let temp = str.split('|').filter(a => a !== "").map(a => a.trim());
		sum += Number(temp[1]);
		towns.push(temp[0]);
	}
	console.log(towns.join(", "));
	console.log(sum);
}

aggregateTable(['| Sofia           | 300',
	'| Veliko Tarnovo  | 500',
	'| Yambol          | 275']
);