
/**
 * @param {Array<string>} times
 * @return {number}
 */
const timeDifference = (times) => {
	const minute = new Array(60 * 24)
	for (const v of times) {
		const h = parseInt(v.substring(0, 2))
		const m = parseInt(v.substring(3))
		if (minute[h * 60 + m] == true) {
			return 0
		}
		minute[h * 60 + m] = true
	}

	let prev = -1, first = -1, minDiff = 60 * 24 + 1
	for (let i = 0; i < minute.length; i++) {
		if (minute[i] == true) {
			if (prev != -1) {
				minDiff = Math.min(minDiff, i - prev)

			} else {
				first = i
			}
			prev = i
		}
	}
	minDiff = Math.min(minDiff, first + 60 * 24 - prev)
	return minDiff
}

const ans1 = timeDifference(["00:03", "23:59", "12:03"])
console.log(ans1) // 4
