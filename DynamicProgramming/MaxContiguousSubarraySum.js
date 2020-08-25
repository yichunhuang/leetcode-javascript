
/**
 * @param {Array<number>} nums
 * @return {number}
 */
const maxContiguousSubarraySum = (nums) => {
	const dp = []
	for (let i = 0; i < nums.length; i++) {
		if (i == 0) {
			dp[i] = nums[0]
		} else {
			dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
		}
	}
	return Math.max(...dp)
}

const ans = maxContiguousSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])
console.log(ans)
