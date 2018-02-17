function findOccurrencesOfWordInSentence(sentence, word) {
	let count = 0, match;
	let regex = new RegExp(`\\b${word}\\b`, 'gi');
	
	while (match = regex.exec(sentence)) {
		count++;
	}
	
	return count;
}

console.log(findOccurrencesOfWordInSentence('There was one. Therefore I bought it. I wouldn�t buy it otherwise.', 'there'));
console.log(findOccurrencesOfWordInSentence('The waterfall was so high, that the child couldn’t see its peak.', 'the'));