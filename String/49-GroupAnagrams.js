/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	const map = {}
	strs.forEach(s => {
		const arr = new Array(26).fill(0)
		for (let i = 0; i < s.length; i++) {
			const index = s[i].charCodeAt(0) - 'a'.charCodeAt(0)
			arr[index] += 1
		}
		const key = arr.join(',')
		if (map[key]) {
			map[key].push(s)
		} else {
			map[key] = [s]
		}
	})

	return Object.values(map)
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])) // [["bat"],["nat","tan"],["ate","eat","tea"]]
