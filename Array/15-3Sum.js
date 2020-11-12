/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// two pointer
// time complexity O(n^2)
var threeSum = function (nums) {
	const result = []
	nums.sort((a, b) => a - b)
	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] == nums[i - 1]) continue // avoid duplicate
		let start = i + 1
		let end = nums.length - 1
		while (start < end) {
			if (nums[i] + nums[start] + nums[end] == 0) {
				result.push([nums[i], nums[start], nums[end]])
				while (start < end && nums[start] == nums[start + 1]) // avoid duplicate
					start++
				start++
				while (start < end && nums[end] == nums[end - 1]) // avoid duplicate
					end--
				end--
			} else if (nums[i] + nums[start] + nums[end] < 0) {
				start++
			} else {
				end--
			}
		}
	}
	return result
};

const ans1 = threeSum([-1, 0, 1, 2, -1, -4])
console.log(ans1) // [[-1,-1,2],[-1,0,1]]
