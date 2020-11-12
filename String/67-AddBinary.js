/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
	const s1 = a, s2 = b
	const stack1 = []
	const stack2 = []
	for (let i = 0; i < s1.length; i++) {
		stack1.push(parseInt(s1[i]))
	}

	for (let i = 0; i < s2.length; i++) {
		stack2.push(parseInt(s2[i]))
	}

	let result = '', carry = 0
	while (stack1.length || stack2.length) {
		let sum = (stack1.length ? stack1.pop() : 0) + (stack2.length ? stack2.pop() : 0) + carry
		if (sum < 2) {
			carry = 0
			result = sum.toString() + result
		} else {
			carry = 1
			result = (sum - 2).toString() + result
		}
	}
	result = (carry == 0 ? '' : carry.toString()) + result

	return result
};

console.log(addBinary("1010", "1011")) // "10101"
