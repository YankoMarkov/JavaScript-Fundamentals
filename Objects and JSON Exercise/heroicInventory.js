function heroicInventory(arr) {
	let res = [];
	
	for (let str of arr) {
		let obj = {};
		let strArr = str.split(" / ");
		let item = strArr[2];
		if (strArr[2].length > 1) {
			item = strArr[2].split(", ");
		}
		obj['name'] = strArr[0];
		obj['level'] = Number(strArr[1]);
		obj['items'] = item;
		res.push(obj);
	}
	return JSON.stringify(res);
}

console.log(heroicInventory([
	'Isacc / 25 / Apple, GravityGun',
	'Derek / 12 / BarrelVest, DestructionSword',
	'Hes / 1 / Desolator, Sentinel, Antara'
]));