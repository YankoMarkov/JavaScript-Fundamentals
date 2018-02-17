function spiceMustFlow(num) {
	let days = 0;
	let consume = 0;
	
	while (num >= 100) {
		consume += num - 26;
		num -= 10;
		days++;
	}
	if (consume >= 26) {
		consume -= 26;
	}
	console.log(days);
	console.log(consume);
}

spiceMustFlow(99);