function airPollution(inputMatrix, arr) {
	let matrix = [];
	for (let i = 0; i < inputMatrix.length; i++) {
		let temp = inputMatrix[i].split(" ").map(Number);
		matrix.push(temp);
	}
	
	for (let i = 0; i < arr.length; i++) {
		let temp = arr[i].split(" ");
		
		switch (temp[0].toLowerCase()) {
			case "breeze":
				if (Number(temp[1]) >= 0) {
					matrix[Number(temp[1])] = matrix[Number(temp[1])].map(a => a - 15);
				}
				break;
			case "gale":
				if (Number(temp[1]) >= 0) {
					for (let j = 0; j < matrix[0].length; j++) {
						matrix[j][Number(temp[1])] -= 20;
					}
					
				}
				break;
			case "smog":
				if (Number(temp[1]) >= 0) {
					for (let j = 0; j < matrix.length; j++) {
						for (let k = 0; k < matrix[j].length; k++) {
							matrix[j][k] += Number(temp[1]);
						}
					}
				}
				break;
		}
	}
	let result = [];
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] >= 50) {
				result.push(`[${i}-${j}]`);
			}
		}
	}
	if (result.length > 0) {
		console.log(`Polluted areas: ${result.join(", ")}`);
	} else {
		console.log("No polluted areas");
	}
}

airPollution([
		"5 7 2 14 4",
		"21 14 2 5 3",
		"3 16 7 42 12",
		"2 20 8 39 14",
		"7 34 1 10 24",
	],
	["breeze 1", "gale 2", "smog 35"]
);