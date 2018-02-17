function buildWall(arr) {
	arr = arr.map(Number);
	let cubicConcr = 0;
	let cubicConcrArr = [];
	
	while (true) {
		let isLess30 = false;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < 30) {
				arr[i] += 1;
				cubicConcr += 195;
				isLess30 = true;
			}
		}
		if (!isLess30) {
			break;
		}
		cubicConcrArr.push(cubicConcr);
		cubicConcr = 0;
	}
	let totalPrice = cubicConcrArr.reduce((a, b) => a + b) * 1900;
	console.log(cubicConcrArr.join(", "));
	console.log(`${totalPrice} pesos`);
}

buildWall(['17', '22', '17', '19', '17']);