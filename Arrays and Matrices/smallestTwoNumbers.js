function smallestTwoNumbers(arr) {
	arr.sort((a, b) => a - b);
	return arr.slice(0, 2).join(" ");
}

console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));