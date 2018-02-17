function bitcoinMining(arr) {
	let bitcoinPrice = 11949.16;
	let goldPrice = 0;
	let bitcoin = 0;
	let day = 0;
	let count = 1;
	
	for (let i = 0; i < arr.length; i++) {
		let goldInGram = Number(arr[i]);
		if (count % 3 === 0) {
			goldInGram = goldInGram - (goldInGram * 0.3);
		}
		goldPrice += goldInGram * 67.51;
		if (goldPrice > bitcoinPrice) {
			if (day === 0) {
				day = count;
			}
			while (goldPrice > bitcoinPrice) {
				bitcoin++;
				goldPrice -= bitcoinPrice;
			}
		}
		count++;
	}
	if (bitcoin === 0) {
		console.log(`Bought bitcoins: ${bitcoin}`);
		console.log(`Left money: ${goldPrice.toFixed(2)} lv.`);
	} else {
		console.log(`Bought bitcoins: ${bitcoin}`);
		console.log(`Day of the first purchased bitcoin: ${day}`);
		console.log(`Left money: ${goldPrice.toFixed(2)} lv.`);
	}
}

bitcoinMining([
	'3124.15', '504.212', '2511.124'
]);