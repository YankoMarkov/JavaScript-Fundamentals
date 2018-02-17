function theHungryProgrammer(meals, commands) {
	let count = 0;
	
	for (let str of commands) {
		let command = str.split(" ");
		if (command[0] === "End") {
			break;
		}
		
		switch (command[0]) {
			case "Serve":
				if (meals.length < 1) {
					break;
				}
				console.log(`${meals.pop()} served!`);
				break;
			case "Add":
				if (command[1] === undefined) {
					break;
				}
				meals.unshift(command[1]);
				break;
			case "Shift":
				if (meals[Number(command[1])] !== undefined && meals[Number(command[2])] !== undefined) {
					let first = meals[Number(command[1])];
					let second = meals[Number(command[2])];
					meals.splice(Number(command[1]), 1, second);
					meals.splice(Number(command[2]), 1, first);
				}
				break;
			case "Eat":
				if (meals.length < 1) {
					break;
				}
				console.log(`${meals.shift()} eaten`);
				count++;
				break;
			case "Consume":
				if (meals[Number(command[1])] !== undefined && meals[Number(command[2])] !== undefined) {
					let num = (Number(command[2]) + 1) - Number(command[1]);
					meals.splice(Number(command[1]), num);
					count += num;
					console.log("Burp!");
				}
				break;
		}
	}
	if (meals.length > 0) {
		console.log(`Meals left: ${meals.join(", ")}`);
	} else {
		console.log("The food is gone");
	}
	console.log(`Meals eaten: ${count}`);
}

theHungryProgrammer(['soup', 'spaghetti', 'eggs'],
	['Consume 0 2',
		'Eat',
		'Eat',
		'Shift 0 1',
		'End',
		'Eat']
);