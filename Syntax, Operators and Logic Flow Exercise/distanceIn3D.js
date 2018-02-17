function distanceIn3D(arr) {
	let pointA = {x: arr[0], y: arr[1], z: arr[2]};
	let pointB = {x: arr[3], y: arr[4], z: arr[5]};
	
	let destinationX = Math.pow(pointA.x - pointB.x, 2);
	let destinationY = Math.pow(pointA.y - pointB.y, 2);
	let destinationZ = Math.pow(pointA.z - pointB.z, 2);
	return Math.sqrt(destinationX + destinationY + destinationZ);
}

console.log(distanceIn3D([3.5, 0, 1, 0, 2, -1]));