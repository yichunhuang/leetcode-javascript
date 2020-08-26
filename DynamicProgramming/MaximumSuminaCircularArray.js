
/**
 * @param {Array<number>} nums
 * @return {number}
 */
/*
解題思路
以下兩個可能取最大值
1. original Max Sum Subarray
2. circular:
	The maximum sum in a circular subarray is simply the sum of the entire array minus the sum of a minimum sum contiguous subarray
*/
const maxCircularSubarraySum = (nums) => {
	const maxDP = []
	for (let i = 0; i < nums.length; i++) {
		if (i == 0) {
			maxDP[i] = nums[0]
		} else {
			maxDP[i] = Math.max(maxDP[i - 1] + nums[i], nums[i])
		}
	}

	const negative_nums = nums.map(n => -n)
	const negativeDP = []
	for (let i = 0; i < negative_nums.length; i++) {
		if (i == 0) {
			negativeDP[i] = negative_nums[0]
		} else {
			negativeDP[i] = Math.max(negativeDP[i - 1] + negative_nums[i], negative_nums[i])
		}
	}
	const minDP = negativeDP.map(n => -n)
	minDP.pop() // remove last one
	const sum = nums.reduce((total, current) => {
		return total + current
	})
	const min = Math.min(...minDP)
	return Math.max(sum - min, ...maxDP)

}

const ans = maxCircularSubarraySum([20, -100, 20])
console.log(ans)
