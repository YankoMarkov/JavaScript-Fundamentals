function thePyramidОfKingDjoser(base, increment) {
	let stone = 0;
	let marble = 0;
	let lapisLazuli = 0;
	let gold = 0;
	let step = 1;
	
	while (base > 2) {
		let stoneArea = (base - 2) ** 2;
		let basePerimeter = (base * 4) - 4;
		
		if (step % 5 === 0) {
			stone += stoneArea * increment;
			lapisLazuli += basePerimeter * increment;
		} else {
			stone += stoneArea * increment;
			marble += basePerimeter * increment;
		}
		step++;
		base -= 2;
	}
	let pyramidHigh = step * increment;
	gold += (base ** 2) * increment;
	
	console.log(`Stone required: ${Math.ceil(stone)}`);
	console.log(`Marble required: ${Math.ceil(marble)}`);
	console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
	console.log(`Gold required: ${Math.ceil(gold)}`);
	console.log(`Final pyramid height: ${Math.floor(pyramidHigh)}`);
}

thePyramidОfKingDjoser(23,
	0.5
);