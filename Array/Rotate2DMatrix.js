
/**
 * @param {Array<Array<number>>} matrix
 * @return {Array<Array<number>>}
 */
const rotate = (matrix) => {
	const size = matrix.length - 1
	for (let layer = 0; layer < Math.floor(matrix.length / 2); layer++) {
		for (let key = layer; key < size - layer; key++) {
			const top = matrix[layer][key]
			const right = matrix[key][size - layer]
			const bottom = matrix[size - layer][size - key]
			const left = matrix[size - key][layer]

			matrix[layer][key] = left
			matrix[key][size - layer] = top
			matrix[size - layer][size - key] = right
			matrix[size - key][layer] = bottom
		}
	}
	return matrix
}

const ans1 = rotate([
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16]
])

/*
[
 [13,  9, 5, 1],
 [14, 10, 6, 2],
 [15, 11, 7, 3],
 [16, 12, 8, 4]
]
*/

console.log(ans1)
