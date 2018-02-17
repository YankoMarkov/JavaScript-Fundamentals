function simpleEmailValidation(str) {
	let regex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.([a-zA-Z.]+)+$/;
	
	return regex.test(str) ? "Valid" : "Invalid";
}

console.log(simpleEmailValidation("valid@emDail.bg.hj"));