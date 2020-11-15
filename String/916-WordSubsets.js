/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function (A, B) {
	// combine B as a word that each letter has max number
	const B_count = new Array(26).fill(0)
	for (let i = 0; i < B.length; i++) {
		const tmp_count = count(B[i])
		for (let j = 0; j < 26; j++) {
			B_count[j] = Math.max(B_count[j], tmp_count[j])
		}
	}
	const result = []
	for (let i = 0; i < A.length; i++) {
		const tmp_count = count(A[i])
		let flag = true
		for (let j = 0; j < 26; j++) {
			if (tmp_count[j] < B_count[j]) {
				flag = false
				break
			}
		}
		if (flag) {
			result.push(A[i])
		}
	}
	return result

	function count(word) {
		const tmp = new Array(26)
		tmp.fill(0)
		for (let i = 0; i < word.length; i++) {
			const index = word[i].charCodeAt(0) - 'a'.charCodeAt(0)
			tmp[index] = (tmp[index] || 0) + 1
		}
		return tmp
	}
};

console.log(wordSubsets(["orange", "room", "more"], ["rm", "oo"]))
console.log(wordSubsets(["padding", "css", "randomcs"], ["cs", "c"]))
