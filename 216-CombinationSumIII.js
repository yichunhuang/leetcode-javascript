/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
	const ans = []
	const current = []
	helper(current, k, n, 1)

	function helper(current, k, n, start) {
		if (k == 0 && n == 0) {
			const copy = JSON.parse(JSON.stringify(current))
			ans.push(copy)
			return
		}
		if (k < 0 || n < 0) {
			return
		}

		for (let i = start; i <= 9; i++) {
			current.push(i)
			helper(current, k - 1, n - i, i + 1)
			current.pop()
		}
	}
	return ans
};

const ans = combinationSum3(3, 7)
console.log(ans)
