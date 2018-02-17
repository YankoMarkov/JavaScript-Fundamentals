function calendar(arr) {
	let [day, month, year] = arr.map(Number);
	let html = "<table>\n";
	html += "  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n";
	
	let currentDate = new Date(year, month - 1, 1);
	let lastDayOfPrevMonth = new Date(year, month - 1, 0).getDate();
	
	if (currentDate.getDate() !== 0) {
		currentDate = new Date(year, month - 2, lastDayOfPrevMonth - currentDate.getDay() + 1);
	}
	let previousMonth = new Date(year, month - 2, 1);
	let nextMonth = new Date(year, month, 1);
	
	while (true) {
		if (currentDate.getMonth() + 1 === nextMonth.getMonth() + 1 && currentDate.getDay() === 0) {
			break;
		}
		if (currentDate.getDay() === 0) {
			html += "  <tr>";
		}
		if (currentDate.getMonth() + 1 === previousMonth.getMonth() + 1) {
			html += `<td class="prev-month">${currentDate.getDate()}</td>`;
		}
		if (currentDate.getDate() === day && currentDate.getMonth() + 1 === month) {
			html += `<td class="today">${currentDate.getDate()}</td>`;
		} else if (currentDate.getMonth() + 1 === month) {
			html += `<td>${currentDate.getDate()}</td>`;
		}
		if (currentDate.getMonth() + 1 === nextMonth.getMonth() + 1) {
			html += `<td class="next-month">${currentDate.getDate()}</td>`;
		}
		if (currentDate.getDay() === 6) {
			html += "</tr>\n";
		}
		currentDate.setDate(currentDate.getDate() + 1);
	}
	
	html += "</table>";
	return html;
}

console.log(calendar([1, 1, 1900]));