
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
const levenshteinDistance = (s1, s2) => {
	// sub, ins, del
	const dp = []
	for (let i = 0; i <= s1.length; i++) {
		dp[i] = []
		for (let j = 0; j <= s2.length; j++) {
			if (i == 0) {
				dp[i][j] = j
			} else if (j == 0) {
				dp[i][j] = i
			} else if (s1[i - 1] == s2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1]
			} else {
				dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
			}
		}
	}
	return dp[s1.length][s2.length]
}

const ans = levenshteinDistance("intention", "execution")
console.log(ans)
