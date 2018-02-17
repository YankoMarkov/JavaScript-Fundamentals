function emplateFormat(arr) {
	let result = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
		"<quiz>\n";
	for (let i = 0; i < arr.length; i += 2) {
		result += "  <question>\n" +
			`    ${arr[i]}\n` +
			"  </question>\n" +
			"  <answer>\n" +
			`    ${arr[i + 1]}\n` +
			"  </answer>\n";
	}
	result += "</quiz>\n"
	return result;
}

console.log(emplateFormat(["Dry ice is a frozen form of which gas?",
	"Carbon Dioxide",
	"What is the brightest star in the night sky?",
	"Sirius"]
));