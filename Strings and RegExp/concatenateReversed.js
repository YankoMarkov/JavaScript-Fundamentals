function concatenateReversed(arr) {
	return arr.join("").split("").reverse().join("");
}

console.log(concatenateReversed(['I', 'am', 'student']));