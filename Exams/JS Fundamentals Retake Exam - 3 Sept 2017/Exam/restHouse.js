function restHouse(roomsArr, guestsArr) {
	let rooms = new Map();
	let guestsWithoutRooms = 0;
	
	for (let obj of roomsArr) {
		let roomSpace = obj.type === "double-bedded" ? 2 : 3;
		rooms.set(obj.number, {type: obj.type, emptyBeds: roomSpace});
	}
	for (let guest of guestsArr) {
		let roomFound = false;
		if (guest.first.gender !== guest.second.gender) {
			for (let [key, val] of rooms) {
				if (val.type === "double-bedded" && val.emptyBeds === 2) {
					val.guests = [];
					val.guests = [guest.first, guest.second];
					val.emptyBeds = 0;
					roomFound = true;
					break;
				}
			}
		} else {
			for (let [key, val] of rooms) {
				if (val.type === "triple" && val.emptyBeds > 1) {
					if (val.guests === undefined) {
						val.guests = [];
					} else if (val.guests[0].gender !== guest.second.gender) {
						continue;
					}
					if (guest.first !== undefined) {
						val.guests.push(guest.first);
						val.emptyBeds -= 1;
					}
					val.guests.push(guest.second);
					val.emptyBeds -= 1;
					roomFound = true;
					break;
				} else if (val.type === "triple" && val.emptyBeds === 1) {
					if (val.guests[0].gender === guest.second.gender) {
						val.guests.push(guest.first === undefined ? guest.second : guest.first);
						val.emptyBeds -= 1;
						guest.first = undefined;
					}
				}
			}
		}
		if (!roomFound) {
			guestsWithoutRooms += guest.first === undefined ? 1 : 2;
		}
	}
	for (let [room, val] of [...rooms].sort()) {
		console.log(`Room number: ${room}`);
		if (val.guests !== undefined) {
			for (let guest of val.guests.sort((a, b) => {
				return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
			})) {
				console.log(`--Guest Name: ${guest.name}`);
				console.log(`--Guest Age: ${guest.age}`);
			}
			console.log(`Empty beds in the room: ${val.emptyBeds}`);
		} else {
			console.log(`Empty beds in the room: ${val.emptyBeds}`);
		}
	}
	console.log(`Guests moved to the tea house: ${guestsWithoutRooms}`);
}

restHouse(
	[{number: '101A', type: 'double-bedded'},
		{number: '104', type: 'triple'},
		{number: '101B', type: 'double-bedded'},
		{number: '102', type: 'triple'}],
	[{
		first: {name: 'Sushi & Chicken', gender: 'female', age: 15},
		second: {name: 'Salisa Debelisa', gender: 'female', age: 25}
	},
		{
			first: {name: 'Daenerys Targaryen', gender: 'female', age: 20},
			second: {name: 'Jeko Snejev', gender: 'male', age: 18}
		},
		{
			first: {name: 'Pesho Goshov', gender: 'male', age: 20},
			second: {name: 'Gosho Peshov', gender: 'male', age: 18}
		},
		{
			first: {name: 'Conor McGregor', gender: 'male', age: 29},
			second: {name: 'Floyd Mayweather', gender: 'male', age: 40}
		}]
);