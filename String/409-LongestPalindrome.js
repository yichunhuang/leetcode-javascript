/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	let result = 0
	const map = {}
	for (let i = 0; i < s.length; i++) {
		if (map[s[i]] == 1) {
			result += 2
			map[s[i]] = 0
		} else {
			map[s[i]] = 1
		}
	}
	for (const key in map) {
		if (map[key] == 1) {
			result += 1
			break
		}
	}
	return result
};

const ans1 = longestPalindrome("abccccdd")
console.log(ans1)
