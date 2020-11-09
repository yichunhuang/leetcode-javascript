
/**
 * @param {number} n
 * @return {Array<number>}
 */
const enumeratePrimes = (n) => {
	const arr = []
	for (let i = 2; i < n; i++) {
		arr[i] = true
	}

	for (let i = 2; i < n; i++) {
		let index = i, count = 2
		while (index * count < n) {
			arr[index * count] = false
			count++
		}
	}

	const result = []
	for (let i = 2; i < n; i++) {
		if (arr[i] == true) {
			result.push(i)
		}
	}
	return result
}

const ans1 = enumeratePrimes(1)
console.log(ans1) // []

const ans2 = enumeratePrimes(23)
console.log(ans2) // [2, 3, 5, 7, 11, 13, 17, 19]
