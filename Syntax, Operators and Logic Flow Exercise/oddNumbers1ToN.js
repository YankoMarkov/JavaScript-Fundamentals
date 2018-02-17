function oddNumbers1ToN(num) {
	for (let i = 1; i <= num; i++) {
		if (i % 2 !== 0) {
			console.log(i);
		}
	}
}

console.log(oddNumbers1ToN(10));