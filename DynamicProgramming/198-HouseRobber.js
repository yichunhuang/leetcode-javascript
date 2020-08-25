/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (nums.length == 0) {
		return 0
	}
	if (nums.length == 1) {
		return nums[0]
	}
	const dp = []
	dp[0] = nums[0]
	dp[1] = Math.max(dp[0], nums[1])
	for (let i = 2; i < nums.length; i++) {
		dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
	}
	return dp[dp.length - 1]
};

const ans = rob([2, 7, 9, 3, 1])
console.log(ans)
