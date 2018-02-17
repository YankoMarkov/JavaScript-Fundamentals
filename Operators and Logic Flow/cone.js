function cone(r, h) {
	let s = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));
	let v = (1 / 3) * Math.PI * r * r * h;
	let l = Math.PI * r * s;
	let b = Math.PI * r * r;
	let a = l + b;
	
	console.log(`volume = ${v.toFixed(4)}`);
	console.log(`area = ${a.toFixed(4)}`);
}

console.log(cone(3, 5));