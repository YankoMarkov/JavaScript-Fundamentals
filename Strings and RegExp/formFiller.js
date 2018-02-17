function formFiller(username, email, phone, arr) {
	arr.forEach(a => {
		a = a.replace(/<![a-zA-Z]+!>/g, username);
		a = a.replace(/<@[a-zA-Z]+@>/g, email);
		a = a.replace(/<\+[a-zA-Z]+\+>/g, phone);
		console.log(a);
	});
}

formFiller('Pesho',
	'pesho@softuni.bg',
	'90-60-90',
	['Hello, <!username!>!',
		'Welcome to your Personal profile.',
		'Here you can modify your profile freely.',
		'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
		'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
		'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
);