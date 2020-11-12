/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	const a = s.toLowerCase()
	const filter = /[a-z0-9]/
	let start = 0, end = a.length - 1
	while (start < end) {
		while (!filter.test(a[start]) && start < end) {
			start++
		}

		while (!filter.test(a[end]) && start < end) {
			end--
		}

		if (a[start] != a[end]) {
			return false
		}
		start++
		end--
	}
	return true
};

const ans1 = isPalindrome(".,")
console.log(ans1)
