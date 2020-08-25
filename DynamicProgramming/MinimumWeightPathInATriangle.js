
/**
 * @param {Array<Array<number>>} triangle
 * @return {number}
 */
const minimumPathCost = (triangle) => {
	// 正上方 或 左上方
	const dp = []
	for (let i = 0; i < triangle.length; i++) {
		dp[i] = []
		for (let j = 0; j < triangle[i].length; j++) {
			if (i == 0) {
				dp[i][j] = triangle[i][j]
			} else if (j == 0) {
				dp[i][j] = dp[i - 1][j] + triangle[i][j]
			} else {
				dp[i][j] = Math.min(dp[i - 1][j] || Number.MAX_SAFE_INTEGER, dp[i - 1][j - 1] || Number.MAX_SAFE_INTEGER) + triangle[i][j]
			}
		}
	}
	return Math.min(...dp[triangle.length - 1])
}

const ans = minimumPathCost([
	[5],
	[1, 6],
	[4, 3, 10],
	[3, 2, 4, 1]
])
console.log(ans)
