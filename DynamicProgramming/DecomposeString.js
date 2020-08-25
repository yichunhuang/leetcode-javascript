
/**
 * @param {Array<string>} dictionary
 * @param {string} s
 * @return {boolean}
 */
const canDecompose = (dictionary, s) => {
	const dp = []
	dp[0] = true
	for (let i = 1; i <= s.length; i++) {
		for (let j = 0; j < i; j++) {
			if (dp[j] == true && dictionary.includes(s.substring(j, i))) {
				dp[i] = true
				break
			}
		}
	}
	return dp[s.length] == true ? true : false
}


const result = canDecompose(["ap", "pl", "ppp", "pple"], "apple")
console.log(result)
