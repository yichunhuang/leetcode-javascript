/**
 * @param {number[]} hours
 * @return {number}
 */
/*
解題思路
把 tiring day 定為 +1
non tiring day 定為 -1
最長的區間有兩種可能
a. 到目前總長 > 0
b. 到目前總長如果是 0，找第一個出現總長是 -1 的 index，目前總長扣掉該長度
所以要把每個第一次出現的總和的 index 記下來
*/
var longestWPI = function (hours) {
	let max_interval = 0, current_sum = 0
	const hours_sign = hours.map(h => {
		if (h > 8) {
			return 1
		}
		return -1
	})

	const first_sum_index = {}

	for (let i = 0; i < hours_sign.length; i++) {
		current_sum += hours_sign[i]
		if (isNaN(first_sum_index[current_sum])) {
			first_sum_index[current_sum] = i
		}
		if (current_sum > 0) {
			max_interval = i + 1
		} else {
			const first = first_sum_index[current_sum - 1] // important! reduce problem to target  == 1
			if (!isNaN(first)) {
				max_interval = Math.max(max_interval, i - first)
			}
		}
	}
	return max_interval
};

console.log(longestWPI([8, 10, 6, 16, 5]))
