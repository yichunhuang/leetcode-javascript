/**
 * @param {number[]} nums
 * @return {boolean}
 */
/* 解題思路
1. 每一回合找和對手最大的差
2. 設 cache 將時間複雜度降為 O(n^2)
*/
var PredictTheWinner = function (nums) {
	const cache = []
	function getMaxScore(left, right) { // 每一輪和對手最大的差
		if (left == right) {
			return nums[left]
		}
		const index = left * nums.length + right
		if (cache[index]) {
			return cache[index]
		}
		const a = nums[left] - getMaxScore(left + 1, right)
		const b = nums[right] - getMaxScore(left, right - 1)
		cache[index] = Math.max(a, b)
		return cache[index]
	}
	return getMaxScore(0, nums.length - 1) >= 0 ? true : false
};
console.log(PredictTheWinner([1, 5, 2]))
