function moviePrices(arr) {
	
	switch (arr[0].toLowerCase()) {
		case "the godfather":
			switch (arr[1].toLowerCase()) {
				case "monday":
					return 12;
				case "tuesday":
					return 10;
				case "wednesday":
					return 15;
				case "thursday":
					return 12.50;
				case "friday":
					return 15;
				case "saturday":
					return 25;
				case "sunday":
					return 30;
				default:
					return "error";
			}
		case "schindler's list":
			switch (arr[1].toLowerCase()) {
				case "monday":
					return 8.50;
				case "tuesday":
					return 8.50;
				case "wednesday":
					return 8.50;
				case "thursday":
					return 8.50;
				case "friday":
					return 8.50;
				case "saturday":
					return 15;
				case "sunday":
					return 15;
				default:
					return "error";
			}
		case "casablanca":
			switch (arr[1].toLowerCase()) {
				case "monday":
					return 8;
				case "tuesday":
					return 8;
				case "wednesday":
					return 8;
				case "thursday":
					return 8;
				case "friday":
					return 8;
				case "saturday":
					return 10;
				case "sunday":
					return 10;
				default:
					return "error";
			}
		case "the wizard of oz":
			switch (arr[1].toLowerCase()) {
				case "monday":
					return 10;
				case "tuesday":
					return 10;
				case "wednesday":
					return 10;
				case "thursday":
					return 10;
				case "friday":
					return 10;
				case "saturday":
					return 15;
				case "sunday":
					return 15;
				default:
					return "error";
			}
		default:
			return "error";
	}
}

console.log(moviePrices(["The Godfather", "Friday"]));