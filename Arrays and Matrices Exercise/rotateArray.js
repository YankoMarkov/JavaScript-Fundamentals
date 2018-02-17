function rotateArray(arr) {
	let rotation = Number(arr.pop());
	let resultArr = [];
	let index = arr.length - (rotation % arr.length);
	
	while (resultArr.length < arr.length) {
		let end = index % arr.length;
		resultArr.push(arr[end]);
		index++;
	}
	return resultArr.join(" ");
}

console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '14']));
console.log(rotateArray(['1', '2', '3', '4', '2']));