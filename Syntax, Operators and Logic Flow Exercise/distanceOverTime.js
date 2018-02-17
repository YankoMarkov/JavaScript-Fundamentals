function distanceOverTime(arr) {
	let time = arr[2] / 60 / 60;
	let distance1 = arr[0] * time * 1000;
	let distance2 = arr[1] * time * 1000;
	
	return Math.abs(distance1 - distance2);
}

console.log(distanceOverTime([5, -5, 40]));