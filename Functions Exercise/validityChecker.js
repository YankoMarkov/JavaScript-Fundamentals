function validityChecker(arr) {
	let pointA = {x: arr[0], y: arr[1]};
	let pointB = {x: arr[2], y: arr[3]};
	
	let zeroToPointA = Math.sqrt(Math.pow(pointA.x, 2) + Math.pow(pointA.y, 2));
	let zeroToPointB = Math.sqrt(Math.pow(pointB.x, 2) + Math.pow(pointB.y, 2));
	let destinationX = Math.pow(pointA.x - pointB.x, 2);
	let destinationY = Math.pow(pointA.y - pointB.y, 2);
	let pointAToPointB = Math.sqrt(destinationX + destinationY);
	
	if ((zeroToPointA * 10) % 10 === 0) {
		console.log(`{${arr[0]}, ${arr[1]}} to {0, 0} is valid`);
	} else {
		console.log(`{${arr[0]}, ${arr[1]}} to {0, 0} is invalid`);
	}
	if ((zeroToPointB * 10) % 10 === 0) {
		console.log(`{${arr[2]}, ${arr[3]}} to {0, 0} is valid`);
	} else {
		console.log(`{${arr[2]}, ${arr[3]}} to {0, 0} is invalid`);
	}
	if ((pointAToPointB * 10) % 10 === 0) {
		console.log(`{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is valid`);
	} else {
		console.log(`{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is invalid`);
	}
}

validityChecker([3, 0, 0, 4]);