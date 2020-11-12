
/**
 * @param {Array<string>} prefixes
 * @param {string} sentence
 * @return {string}
 */
const replaceWordsWithPrefix = (prefixes, sentence) => {
	const map = {}
	for (let i = 0; i < prefixes.length; i++) {
		map[prefixes[i]] = true
	}
	const words = sentence.split(' ')
	const result = []
	for (let i = 0; i < words.length; i++) {
		for (let j = 1; j <= words[i].length; j++) {
			if (map[words[i].substring(0, j)] == true) {
				words[i] = words[i].substring(0, j)
				break
			}
		}
		result.push(words[i])
	}
	return result.join(' ')
}

console.log(replaceWordsWithPrefix(["cat", "catch", "Alabama"], "The cats were catching yarn"))
