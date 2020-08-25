/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
	const abs_target = Math.abs(target)
	let k = 0, sum = 0
	while (abs_target > sum) {
		sum += (++k)
	}
	const diff = sum - abs_target
	if (diff % 2 == 0) {
		return k
	}
	if (k % 2 == 0) {
		return k + 1
	}
	return k + 2
};

const ans = reachNumber(3)
console.log({ ans })
