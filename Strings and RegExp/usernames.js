function usernames(arr) {
	let result = [];
	
	for (let mail of arr) {
		let [user, domain] = mail.split('@');
		let username = user + ".";
		let tempDomain = domain.split(".").forEach(a => username += a[0]);
		result.push(username)
	}
	return result.join(", ");
}

console.log(usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']));