/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
	const map = {}
	map[0] = 1
	let sum = 0, result = 0
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]
		if (map[sum - k]) {
			result += map[sum - k]
		}
		map[sum] = (map[sum] || 0) + 1
	}
	return result
	// const sum = []
	// let result = 0
	// sum[0] = 0
	// for (let i = 1; i <= nums.length; i++) {
	// 	sum[i] = nums[i - 1] + sum[i - 1]
	// }
	// console.log(sum)
	// for (let i = 0; i < nums.length; i++) {
	// 	for (let j = i + 1; j <= nums.length; j++) {
	// 		if (sum[j] - sum[i] == k) {
	// 			result++
	// 		}
	// 	}
	// }
	// return result
};

const ans1 = subarraySum([10, 10, 10], 20)
console.log(ans1)

// const ans2 = subarraySum([1, 2, 3], 3)
// console.log(ans2)
