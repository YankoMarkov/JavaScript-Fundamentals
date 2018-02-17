function addAndRemoveElementsFromArray(arr) {
	let resultArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === "add") {
			resultArr.push(i + 1);
		}
		if (arr[i] === "remove") {
			resultArr.pop();
		}
	}
	if (resultArr.length === 0) {
		resultArr.push("Empty");
	}
	return resultArr.join("\n");
}

console.log(addAndRemoveElementsFromArray(['add', 'remove', 'remove', 'remove', 'remove']));