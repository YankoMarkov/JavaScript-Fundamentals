function xmlMessenger(str) {
	let regex = /^<message((\s+[a-z]+="[a-zA-Z0-9 .]+"\s*?)*)>((.|\n)+?)<\/message>$/g;
	let regex1 = /\s+([a-z]+)="([A-Za-z0-9 .]+)"\s*?/g;
	let match = regex.exec(str), match1;
	let from = "";
	let to = "";
	
	if (!match) {
		console.log("Invalid message format");
		return;
	}
	let result = "<article>\n";
	while (match1 = regex1.exec(str)) {
		if (match1[1] === "from") {
			from = `  <div>From: <span class="sender">${match1[2]}</span></div>\n`;
		}
		if (match1[1] === "to") {
			to = `  <div>To: <span class="recipient">${match1[2]}</span></div>\n`;
		}
	}
	if (from === "" || to === "") {
		console.log("Missing attributes");
		return;
	}
	let message = match[3];
	result += from;
	result += to;
	result += `  <div>\n    <p>${message.replace(/\n/g, "</p>\n    <p>")}</p>\n  </div>\n`;
	result += "</article>";
	console.log(result);
}

xmlMessenger("<message from=\"Pedro\" to=\"Zaira\" topic=\"Prxima Centauri discoveries\">We have detected a distortion in the light patterns of Proxima Centauri.\n" +
	"It's likely this is a new rocky planet of approximately Earth-mass.\n" +
	"This is very exciting news!\n" +
	"Sincerely, Pedro Amado</message>");