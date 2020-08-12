
/**
 * @param {Array<number>} values
 * @param {Array<number>} weights
 * @param {number} maxWeightConstraint
 * @return {number}
 */
const knapsack = (values, weights, maxWeightConstraint) => {
	const dp = []
	const column = maxWeightConstraint + 1
	const row = weights.length + 1
	for (let i = 0; i < row; i++) {
		dp[i] = []
		for (let j = 0; j < column; j++) {
			if (i === 0) [
				dp[i][j] = 0
			]
			else if (j === 0) {
				dp[i][j] = 0
			}
			else if (weights[i - 1] > j) {
				dp[i][j] = dp[i - 1][j]
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], values[i - 1] + dp[i - 1][j - weights[i - 1]])
			}
		}
	}
	return dp[row - 1][column - 1]
}
