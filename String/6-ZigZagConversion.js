/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	const map = {}
	for (let i = 0; i < numRows; i++) {
		map[i] = []
	}
	let index = 0, direction = 1, count = 0
	while (count < s.length) {
		map[index].push(s[count])
		if (numRows == 1) {
			direction = 0
		} else if (index + direction == numRows) {
			direction = -1
		} else if (index + direction < 0) {
			direction = 1
		}
		index += direction
		count++
	}
	// console.log(map)
	let result = []
	for (let i = 0; i < numRows; i++) {
		result = result.concat(map[i])
	}
	return result.join('')
};

const ans1 = convert("YELLOWPINK", 4)
console.log(ans1) // "YPEWILONLK"

const ans2 = convert("REDBLUEBLACK", 2)
console.log(ans2)

const ans3 = convert("AB", 1)
console.log(ans3)
