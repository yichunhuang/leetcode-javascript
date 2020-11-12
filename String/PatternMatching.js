
/**
 * @param {Array<string>} words
 * @param {string} pattern
 * @return {Array<string>}
 */
const findAndReplacePattern = (words, pattern) => {
	const result = []
	words.forEach(w => {
		let flag = true
		const word_to_pattern = {}, pattern_to_word = {}
		for (let i = 0; i < pattern.length; i++) {
			if (!word_to_pattern[w[i]] && !pattern_to_word[pattern[i]]) {
				word_to_pattern[w[i]] = pattern[i]
				pattern_to_word[pattern[i]] = w[i]
			} else if (word_to_pattern[w[i]] != pattern[i] || pattern_to_word[pattern[i]] != w[i]) {
				flag = false
			}
		}
		if (flag) {
			result.push(w)
		}
	})

	return result
}

const ans1 = findAndReplacePattern(["aac", "bbc", "bcb", "yzy"], "ghg")
console.log(ans1) // ["bcb", "yzy"]

const ans2 = findAndReplacePattern(["aa", "bb"], "cc")
console.log(ans2) // ["aa", "bb"]

const ans3 = findAndReplacePattern(["abc", "cde", "zzz"], "aaa")
console.log(ans3) // []
