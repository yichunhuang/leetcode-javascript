
/**
 * @param {number} finalScore
 * @param {Array<number>} pointEvents
 * @return {number}
 */
const totalWaysToReachScore = (finalScore, pointEvents) => {
	const dp = []
	for (let i = 0; i <= pointEvents.length; i++) {
		dp[i] = []
		for (let j = 0; j <= finalScore; j++) {
			if (i == 0) {
				dp[i][j] = 0
			} else if (j == 0) {
				dp[i][j] = 1
			} else {
				// 不選 dp[i - 1][j]
				// 選 dp[i][j - pointEvents[i - 1]]
				dp[i][j] = dp[i - 1][j] + (dp[i][j - pointEvents[i - 1]] || 0)
			}
		}
	}
	return dp[pointEvents.length][finalScore]
}

const ans = totalWaysToReachScore(12, [2, 3, 7])
console.log(ans)
