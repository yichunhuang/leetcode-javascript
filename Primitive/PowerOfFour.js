
/**
 * @param {number} input
 * @return {boolean}
 */
const powerOfFour = (input) => {
	const check = 0x55555555

	const isZero = input == 0
	const hasSingleLeadingBit = (input & (input - 1)) == 0
	const hasOnlyOddPosition = (input & check) == input

	return !isZero && hasSingleLeadingBit && hasOnlyOddPosition
}

const ans1 = powerOfFour(16)
console.log(ans1)

const ans2 = powerOfFour(8)
console.log(ans2)
