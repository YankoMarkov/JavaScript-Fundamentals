function filterByAge(minAge, person1, age1, person2, age2) {
	let personA = {name: person1, age: age1};
	let personB = {name: person2, age: age2};
	
	if (personA.age >= minAge) {
		console.log(personA);
	}
	if (personB.age >= minAge) {
		console.log(personB);
	}
}