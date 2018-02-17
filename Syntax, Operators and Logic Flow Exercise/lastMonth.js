function lastMonth(arr) {
	let day = arr[0];
	let month = arr[1];
	let year = arr[2];
	let date = new Date(year, month - 1, day);
	date.setDate(0);
	return date.getDate();
}

console.log(lastMonth([13, 12, 2004]));