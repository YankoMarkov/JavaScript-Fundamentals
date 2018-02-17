function lostInTheMountains(keyword, text) {
	let coordinateRegex = /(north|east)\D*(\d{2})[^,]*(,)\D*(\d{6})/gi;
	let messageRegex = new RegExp(`${keyword}(.*?)${keyword}`, 'g');
	
	let north = "", east = "", match;
	let message = `Message: ${messageRegex.exec(text)[1]}`;
	
	while (match = coordinateRegex.exec(text)) {
		if (match[1].toLowerCase() === "north") {
			north = `${match[2]}.${match[4]} N`;
		}
		if (match[1].toLowerCase() === "east") {
			east = `${match[2]}.${match[4]} E`;
		}
	}
	console.log(north);
	console.log(east);
	console.log(message);
}

lostInTheMountains(
	"4ds",
"eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532"

);