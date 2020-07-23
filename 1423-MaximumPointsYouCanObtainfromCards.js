/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
/*
解題思路：算中間連續區域的最小值
*/
var maxScore = function (cardPoints, k) {
	// k >= cardPoints.length 直接回傳
	const total = sum(0, cardPoints.length)
	if (k >= cardPoints.length) {
		return total
	}
	// cardPoints.length - k 最小值
	let min = -1
	for (let i = 0; i < cardPoints.length; i++) {
		if (i + cardPoints.length - k > cardPoints.length) {
			break
		}
		min = (min < 0 || min > sum(i, cardPoints.length - k)) ? sum(i, cardPoints.length - k) : min
		// console.log('min', min)
	}
	return total - min


	function sum(start, length) {
		let result = 0
		for (let i = start; i < start + length; i++) {
			result += cardPoints[i]
		}
		return result
	}
};
console.log(maxScore([96, 90, 41, 82, 39, 74, 64, 50, 30], 8))
