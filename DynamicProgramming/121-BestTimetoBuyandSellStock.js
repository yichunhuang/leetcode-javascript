/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	if (prices.length == 0) {
		return 0
	}

	const dp = []
	for (let i = 0; i < prices.length; i++) {
		if (i == 0) {
			dp[i] = 0
			continue
		}
		console.log(prices[i] - prices[i - 1])
		dp[i] = Math.max(prices[i] - prices[i - 1] + dp[i - 1], 0)
	}
	return Math.max(...dp)
};

const ans = maxProfit([7, 1, 5, 3, 6, 4])
console.log(ans)
