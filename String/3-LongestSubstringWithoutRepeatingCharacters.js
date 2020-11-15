/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let result = 0, start = 0, end = 0, current = []

	while (start < s.length && end < s.length) {
		if (!current.includes(s[end])) {
			current.push(s[end])
			end++
			result = Math.max(result, current.length)
		} else {
			current.shift()
			start++
		}
	}

	return result
};

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
