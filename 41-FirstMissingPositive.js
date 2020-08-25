/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
	let count = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			nums[count] = nums[i]
			count++
		}
	}

	console.log(nums)
	for (let i = 0; i < count; i++) {
		const key = Math.abs(nums[i])
		if (nums[key - 1] > 0)
			nums[key - 1] = - nums[key - 1]
	}

	console.log(nums)

	for (let i = 0; i < count; i++) {
		if (nums[i] > 0) {
			return i + 1
		}
	}
	return count + 1
};

const ans = firstMissingPositive([1, 2, 0])
console.log(ans)
