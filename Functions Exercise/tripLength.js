function tripLength(arr) {
	let point1 = {x: arr[0], y: arr[1]};
	let point2 = {x: arr[2], y: arr[3]};
	let point3 = {x: arr[4], y: arr[5]};
	
	let distance12 = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
	let distance13 = Math.sqrt(Math.pow(point1.x - point3.x, 2) + Math.pow(point1.y - point3.y, 2));
	let distance23 = Math.sqrt(Math.pow(point2.x - point3.x, 2) + Math.pow(point2.y - point3.y, 2));
	
	if (distance23 <= distance13 && distance12 <= distance13) {
		let distance = distance23 + distance12;
		return `1->2->3: ${distance}`;
	}
	if (distance12 <= distance23 && distance13 < distance23) {
		let distance = distance12 + distance13;
		return `2->1->3: ${distance}`;
	}
	let distance = distance13 + distance23;
	return `1->3->2: ${distance}`;
}

console.log(tripLength([5, 1, 1, 1, 5, 4]));