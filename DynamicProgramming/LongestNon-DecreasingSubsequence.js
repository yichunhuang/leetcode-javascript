
/**
 * @param {Array<number>} nums
 * @return {number}
 */
const lengthOfLNDS = (nums) => {
	const dp = []

	for (let i = 0; i < nums.length; i++) {
		dp[i] = 1
		for (let j = 0; j < i; j++) {
			if (nums[i] >= nums[j]) {
				dp[i] = Math.max(dp[i], dp[j] + 1)
			}
		}
	}

	return Math.max(...dp)
}

const ans = lengthOfLNDS([1, 2, 3, 4, 5, 6])
