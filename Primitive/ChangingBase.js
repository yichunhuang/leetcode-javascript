
/**
 * @param {string} numAsString
 * @param {number} b1
 * @param {number} b2
 * @return {string}
 */
const changeBase = (numAsString, b1, b2) => {
	const negative = numAsString[0] == '-' ? true : false
	numAsString = negative ? numAsString.substring(1) : numAsString

	// 把 base 1 都先換成 10 進位
	let decimal = 0
	for (let i = 0; i < numAsString.length; i++) {
		const char = numAsString[numAsString.length - i - 1]
		if (char.charCodeAt(0) >= 'A'.charCodeAt(0)) { // 'A' to 'Z'
			decimal += (char.charCodeAt(0) - 'A'.charCodeAt(0) + 10) * Math.pow(b1, i)
		} else {
			decimal += char * Math.pow(b1, i)
		}
	}

	// 再把 10 進位換成 base 2
	let result = ''
	while (decimal != 0) {
		const remainder = parseInt(decimal % b2)
		result = (remainder >= 10 ? String.fromCharCode(remainder + 55) : remainder.toString()) + result
		decimal = parseInt(decimal / b2)
	}

	return negative ? '-' + result : result
}
const ans1 = changeBase("-12", 10, 2)
console.log(ans1)

const ans2 = changeBase("123", 4, 10)
console.log(ans2)

const ans3 = changeBase("123", 4, 16)
console.log(ans3)

const ans4 = changeBase("123", 10, 10)
console.log(ans4)
