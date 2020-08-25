
/**
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
const uniquePaths = (rows, cols) => {
	const dp = []
	for (let i = 0; i < rows; i++) {
		dp[i] = []
		for (let j = 0; j < cols; j++) {
			if (i == 0 || j == 0) {
				dp[i][j] = 1
			} else {
				dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
			}
		}
	}
	return dp[rows - 1][cols - 1]
}

const ans = uniquePaths(3, 3)
console.log(ans)
