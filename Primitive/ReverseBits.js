
/**
 * @param {number} input
 * @return {number}
 */
const reverseBits = (input) => {
	let result = 0

	while (input != 0) {
		result = result << 1
		if (input & 1 == 1) {
			result = result | 1
		}
		input = input >> 1
	}

	return result
}


const ans1 = reverseBits(10)
console.log(ans1)

const ans2 = reverseBits(9090)
console.log(ans2)
