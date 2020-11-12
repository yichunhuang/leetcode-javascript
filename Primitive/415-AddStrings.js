/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
	let carry = 0, result = '', len1 = num1.length - 1, len2 = num2.length - 1

	while (len1 >= 0 || len2 >= 0) {
		let sum = carry

		if (len1 >= 0) {
			sum += (num1[len1].charCodeAt(0) - '0'.charCodeAt(0))
			len1--
		}
		if (len2 >= 0) {
			sum += (num2[len2].charCodeAt(0) - '0'.charCodeAt(0))
			len2--
		}
		carry = parseInt(sum / 10)
		result = (sum % 10).toString() + result
	}
	if (carry) {
		result = carry.toString() + result
	}
	return result
};

const ans1 = addStrings("95", "7")
console.log(ans1)
