/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	if (matrix.length == 0) return
	const result = []
	let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1
	while (top <= bottom && left <= right) {
		for (let i = left; i <= right; i++) {
			result.push(matrix[top][i])
		}
		top++

		for (let i = top; i <= bottom; i++) {
			result.push(matrix[i][right])
		}
		right--

		/*
		* If center is a horizontal line, prevent the bottom from rereading what the
		* top row already read.
		*/
		if (top <= bottom) {
			for (let i = right; i >= left; i--) {
				result.push(matrix[bottom][i])
			}
			bottom--
		}

		/*
		* If center is a vertical line, prevent the left from rereading what the right
		* col already read.
		*/
		if (left <= right) {
			for (let i = bottom; i >= top; i--) {
				result.push(matrix[i][left])
			}
			left++
		}
	}
	return result
};

const ans1 = spiralOrder([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
])
console.log(ans1) // [1,2,3,6,9,8,7,4,5]

const ans2 = spiralOrder([
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12]
])
console.log(ans2) // [1,2,3,4,8,12,11,10,9,5,6,7]
