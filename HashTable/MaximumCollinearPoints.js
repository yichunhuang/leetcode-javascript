
/**
 * @param {Array<Array<number>>} points
 * @return {number}
 */
const maximumCollinearPoints = (points) => {
	function getGCD(a, b) {
		while (a !== 0 && b !== 0) {
			if (a > b) {
				a %= b
			} else {
				b %= a
			}
		}
		return a == 0 ? b : a
	}

	let result = 0

	points.forEach((point, index) => {
		const hash_table = {} // key: dy/dx,  value: count
		for (let j = index + 1; j < points.length; j++) {
			const dx = points[j][0] - point[0]
			const dy = points[j][1] - point[1]
			const gcd = getGCD(dx, dy)
			const key = `${parseInt(dx / gcd)}/${parseInt(dy / gcd)}`
			hash_table[key] = (hash_table[key] + 1) || 1
			if (hash_table[key] > result) {
				result = hash_table[key]
			}
		}
	})
	return result + 1
}

const ans = maximumCollinearPoints([[0, 1], [1, 0], [2, 0]])
console.log({ ans })
