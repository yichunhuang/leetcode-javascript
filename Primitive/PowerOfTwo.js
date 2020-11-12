
/**
 * @param {number} input
 * @return {boolean}
 */
const powerOfTwo = (input) => {
	const isZero = input == 0
	const hasSingleLeadingBit = (input & (input - 1)) == 0
	return !isZero && hasSingleLeadingBit
}

const ans1 = powerOfTwo(1)
console.log(ans1)

const ans2 = powerOfTwo(17)
console.log(ans2)
