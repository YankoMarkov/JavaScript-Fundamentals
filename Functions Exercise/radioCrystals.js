function radioCrystals(arr) {
	let targetSize = arr[0];
	
	for (let i = 1; i < arr.length; i++) {
		let microns = arr[i];
		console.log(`Processing chunk ${microns} microns`);
		microns = execute(microns, "Cut", cut);
		microns = execute(microns, "Lap", lap);
		microns = execute(microns, "Grind", grind);
		microns = execute(microns, "Etch", etch);
		
		if (targetSize - 1 === microns) {
			microns = xRay(microns);
		}
		console.log(`Finished crystal ${microns} microns`);
	}
	
	function cut(cristal) {
		cristal /= 4;
		return cristal;
	}
	
	function lap(cristal) {
		cristal -= cristal * 0.2;
		return cristal;
	}
	
	function grind(cristal) {
		cristal -= 20;
		return cristal;
	}
	
	function etch(cristal) {
		cristal -= 2;
		return cristal;
	}
	
	function xRay(cristal) {
		console.log("X-ray x1");
		cristal += 1;
		return cristal;
	}
	
	function transportAndWash(cristal) {
		console.log("Transporting and washing");
		cristal = Math.floor(cristal);
		return cristal;
	}
	
	function execute(microns, opStr, func) {
		let newSize = func(microns);
		let counter = 0;
		while (newSize >= targetSize || Math.floor(targetSize - newSize) === 1) {
			microns = newSize;
			newSize = func(microns);
			counter++;
		}
		if (counter > 0) {
			console.log(`${opStr} x${counter}`);
			microns = transportAndWash(microns);
		}
		return microns;
	}
}

radioCrystals([1000, 4000, 8100]);