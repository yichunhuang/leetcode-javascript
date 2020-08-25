
/**
 * @param {Array<number>} coins
 * @param {number} amount
 * @return {number}
 */
const leastCoins = (coins, amount) => {
	const dp = []
	dp[0] = 0
	for (let i = 1; i <= amount; i++) {
		dp[i] = Number.MAX_SAFE_INTEGER
	}

	for (let i = 1; i <= amount; i++) {
		for (let j = 0; j < coins.length; j++) {
			if (coins[j] <= i) {
				dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]])
			}
		}
	}

	if (dp[dp.length - 1] === Number.MAX_SAFE_INTEGER) {
		return -1
	}
	return dp[dp.length - 1]
}

const ans = leastCoins([2], 5)
console.log(ans)
