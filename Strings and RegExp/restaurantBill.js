function restaurantBill(arr) {
	let sum = 0;
	let products = [];
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 === 0) {
			products.push(arr[i]);
		} else {
			sum += Number(arr[i]);
		}
	}
	return `You purchased ${products.join(", ")} for a total sum of ${Number(sum.toFixed(2))}`;
}

console.log(restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']));