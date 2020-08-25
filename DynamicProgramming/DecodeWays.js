
/**
 * @param {string} s
 * @return {number}
 */
const decodeWays = (s) => {
	const dp = []
	dp[0] = 1
	dp[1] = 1 + (s.substring(0, 2) <= 26 ? 1 : 0)
	for (let i = 2; i < s.length; i++) {
		dp[i] = dp[i - 1] + (s.substring(i - 1, i + 1) <= 26 ? dp[i - 2] : 0)
	}
	return dp[dp.length - 1]
}

const ans = decodeWays('123')
console.log(ans)
