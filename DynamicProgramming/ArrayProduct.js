
/**
 * @param {Array<number>} arr
 * @return {Array<number>}
 */
const productExceptCurrentElement = (arr) => {
	const prefix = []
	const suffix = arr.slice()
	const result = []
	for (let i = 0; i < arr.length; i++) {
		let mul = 1
		for (let j = 0; j < prefix.length; j++) {
			mul *= prefix[j]
		}

		for (let k = 1; k < suffix.length; k++) { // 不算自己
			mul *= suffix[k]
		}
		result.push(mul)
		const value = suffix.shift()
		prefix.push(value)
	}
	return result
}
const ans = productExceptCurrentElement([1, 1, 2, 5])
console.log(ans)
