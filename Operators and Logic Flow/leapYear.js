function leapYear(num) {
	let res = "";
	if (num % 4 === 0 && num % 100 !== 0) {
		res = "yes";
	} else if (num % 400 === 0) {
		res = "yes";
	} else {
		res = "no";
	}
	return res;
}

console.log(leapYear(1917));