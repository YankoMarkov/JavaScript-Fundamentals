function roadRadar(arr) {
	function speedLimit(param) {
		switch (param) {
			case "city":
				return 50;
			case "residential":
				return 20;
			case "interstate":
				return 90;
			case "motorway":
				return 130;
		}
	}
	
	function getInfraction(speed, limit) {
		let overSpeed = speed - limit;
		if (overSpeed <= 0) {
			return false;
		} else if (overSpeed > 0 && overSpeed <= 20) {
			return "speeding";
		} else if (overSpeed > 20 && overSpeed <= 40) {
			return "excessive speeding";
		} else {
			return "reckless driving";
		}
	}
	
	let limit = speedLimit(arr[1]);
	let infraction = getInfraction(arr[0], limit);
	if (infraction) {
		return infraction;
	} else {
		return "";
	}
}

console.log(roadRadar([200, 'motorway']));