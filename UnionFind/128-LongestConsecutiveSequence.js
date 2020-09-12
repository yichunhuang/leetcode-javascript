/**
 * @param {number[]} nums
 * @return {number}
 */
/*
這題沒用到 UF
直接用 hashmap 解
*/
var longestConsecutive = function (nums) {
	const map = {}
	for (let i = 0; i < nums.length; i++) {
		map[nums[i]] = true
	}
	// console.log(map)

	let longest = 0, current_longest = 0
	for (const key in map) {
		let k = key
		while (map[k]) {
			current_longest++
			longest = Math.max(current_longest, longest)
			k++
		}
		current_longest = 0
	}
	return longest
};

const ans = longestConsecutive([100, 4, 200, 1, 3, 2])
console.log(ans) // 4

const ans2 = longestConsecutive([2147483646, -2147483647, 0, 2, 2147483644, -2147483645, 2147483645])
console.log(ans2)
