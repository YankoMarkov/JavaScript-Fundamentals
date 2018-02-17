function treasureLocator(arr) {
	let result = "";
	for (let i = 0; i <= arr.length - 2; i += 2) {
		result += islandChecker(arr[i], arr[i + 1]);
		result += "\n";
	}
	return result;
	
	function islandChecker(x, y) {
		if (x >= 1 && x <= 3) {
			if (y >= 1 && y <= 3) {
				return "Tuvalu";
			}
		}
		if (x >= 0 && x <= 2) {
			if (y >= 6 && y <= 8) {
				return "Tonga";
			}
		}
		if (x >= 5 && x <= 7) {
			if (y >= 3 && y <= 6) {
				return "Samoa";
			}
		}
		if (x >= 4 && x <= 9) {
			if (y >= 7 && y <= 8) {
				return "Cook";
			}
		}
		if (x >= 8 && x <= 9) {
			if (y >= 0 && y <= 1) {
				return "Tokelau";
			}
		}
		return "On the bottom of the ocean";
	}
}

console.log(treasureLocator([6, 4]));