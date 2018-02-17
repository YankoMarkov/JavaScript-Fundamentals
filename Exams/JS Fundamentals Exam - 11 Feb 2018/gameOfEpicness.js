function gameOfEpicness(arr1, arr2) {
	let map = new Map();
	
	for (let obj of arr1) {
		if (!map.has(obj.kingdom)) {
			map.set(obj.kingdom, new Map());
		}
		if (!map.get(obj.kingdom).has(obj.general)) {
			map.get(obj.kingdom).set(obj.general, {army: 0, wins: 0, losses: 0});
		}
		map.get(obj.kingdom).get(obj.general).army += obj.army;
	}
	
	for (let arr of arr2) {
		let kingdomName1 = arr[0];
		let generalName1 = arr[1];
		let kingdomName2 = arr[2];
		let generalName2 = arr[3];
		if (kingdomName1 !== kingdomName2) {
			let armyGeneral1 = map.get(kingdomName1).get(generalName1).army;
			let armyGeneral2 = map.get(kingdomName2).get(generalName2).army;
			if (armyGeneral1 > armyGeneral2) {
				let first = Math.floor(armyGeneral1 + (armyGeneral1 * 0.1));
				let second = Math.floor(armyGeneral2 - (armyGeneral2 * 0.1));
				map.get(kingdomName1).get(generalName1).army = first;
				map.get(kingdomName2).get(generalName2).army = second;
				map.get(kingdomName1).get(generalName1).wins += 1;
				map.get(kingdomName2).get(generalName2).losses += 1;
			}
			if (armyGeneral1 < armyGeneral2) {
				let first = Math.floor(armyGeneral1 - (armyGeneral1 * 0.1));
				let second = Math.floor(armyGeneral2 + (armyGeneral2 * 0.1));
				map.get(kingdomName1).get(generalName1).army = first;
				map.get(kingdomName2).get(generalName2).army = second;
				map.get(kingdomName1).get(generalName1).losses += 1;
				map.get(kingdomName2).get(generalName2).wins += 1;
			}
		}
	}
	let sortMap = new Map([...map]
		.sort((a, b) => {
			let first = 0;
			let first1 = [...a[1]].forEach(v => first += v[1].wins);
			let second = 0;
			let second1 = [...b[1]].forEach(v => second += v[1].wins);
			if (first < second) {
				return 1;
			} else if (first > second) {
				return -1;
			} else {
				let first = 0;
				let first1 = [...a[1]].forEach(v => first += v[1].losses);
				let second = 0;
				let second1 = [...b[1]].forEach(v => second += v[1].losses);
				if (first < second) {
					return -1;
				} else if (first > second) {
					return 1;
				} else {
					let first = a[0].toLowerCase();
					let second = b[0].toLowerCase();
					first.localeCompare(second);
				}
			}
		})
	);
	
	for (let [key, val] of sortMap) {
		console.log(`Winner: ${key}`);
		for (let [k, v] of [...val]
			.sort((a, b) => {
				if (a[1].army < b[1].army) {
					return 1;
				} else if (a[1].army > b[1].army) {
					return -1;
				} else {
					return 0;
				}
			})) {
			console.log(`/\\general: ${k}`);
			console.log(`---army: ${v.army}`);
			console.log(`---wins: ${v.wins}`);
			console.log(`---losses: ${v.losses}`);
		}
		
		break;
	}
}

gameOfEpicness(
	[{kingdom: "Maiden Way", general: "Merek", army: 5000},
		{kingdom: "Stonegate", general: "Ulric", army: 4900},
		{kingdom: "Stonegate", general: "Doran", army: 70000},
		{kingdom: "YorkenShire", general: "Quinn", army: 0},
		{kingdom: "YorkenShire", general: "Quinn", army: 2000},
		{kingdom: "Maiden Way", general: "Berinon", army: 100000}],
	[["YorkenShire", "Quinn", "Stonegate", "Ulric"],
		["Stonegate", "Ulric", "Stonegate", "Doran"],
		["Stonegate", "Doran", "Maiden Way", "Merek"],
		["Stonegate", "Ulric", "Maiden Way", "Merek"],
		["Maiden Way", "Berinon", "Stonegate", "Ulric"]]
);