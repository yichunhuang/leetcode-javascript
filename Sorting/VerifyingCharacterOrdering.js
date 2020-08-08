
/**
 * @param {Array<string>} A
 * @param {string} ordering
 * @return {boolean}
 */
const verifyOrdering = (A, ordering) => {
	function indexOf(char) {
		return ordering.indexOf(char)
	}

	function compare(strA, strB) {
		for (let i = 0; i < strA.length; i++) {
			if (indexOf(strA[i]) === indexOf(strB[i])) {
				continue
			} else if (indexOf(strA[i]) < indexOf(strB[i])) {
				return true
			} else {
				return false
			}
		}
	}

	for (let i = 0; i < A.length - 1; i++) {
		if (compare(A[i], A[i + 1]) === false) {
			return false
		}
	}
	return true
}

const ans = verifyOrdering(["hello", "hey", "a"], "hlbcdefgijkmnopqrstuvwxzya")
console.log({ ans })
