function galacticElections(arr) {
	let systems = new Map();
	
	for (let obj of arr) {
		if (!systems.has(obj.system)) {
			systems.set(obj.system, new Map);
		}
		if (!systems.get(obj.system).has(obj.candidate)) {
			systems.get(obj.system).set(obj.candidate, 0);
		}
		let votes = systems.get(obj.system).get(obj.candidate);
		systems.get(obj.system).set(obj.candidate, votes + Number(obj.votes));
	}
	let result = new Map();
	[...systems].map(([s, c]) =>
		[s, [...c].sort((a, b) => b[1] - a[1])
			.reduce((a, b) => [a[0], a[1] + b[1]])])
		.map(([s, [c, v]]) => [c, s, v])
		.forEach(([c, s, v]) => result.has(c) ? result.get(c).set(s, v) : result.set(c, new Map([[s, v]])));
	
	let ranking = [...result].map(([c, s]) =>
		[c, [...s].map(([s, v]) => v)
			.reduce((a, b) => a + b)])
		.sort(([c1, v1], [c2, v2]) => v2 - v1);
	
	let totalVotes = ranking.map(([c, v]) => v).reduce((a, b) => a + b);
	
	if (ranking[0][1] > totalVotes / 2) {
		console.log(`${ranking[0][0]} wins with ${ranking[0][1]} votes`);
		if (ranking.length > 1) {
			let runner = ranking[1][0];
			console.log(`Runner up: ${runner}`);
			[...result.get(runner)].sort(([s1, v1], [s2, v2]) => v2 - v1).forEach(s => console.log(`${s[0]}: ${s[1]}`));
		} else {
			console.log(`${ranking[0][0]} wins unopposed!`);
		}
	} else {
		console.log(`Runoff between ${ranking[0][0]} with ${Math.floor(ranking[0][1] / totalVotes * 100)}% and ${ranking[1][0]} with ${Math.floor(ranking[1][1] / totalVotes * 100)}%`)
	}
}

galacticElections([ { system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10 },
	{ system: 'Tau',   candidate: 'Kim Jong Andromeda', votes: 200 },
	{ system: 'Tau',   candidate: 'Flying Shrimp',      votes: 150 } ]

);