/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
	const parent_map = {}
	const name_map = {}

	for (let i = 0; i < accounts.length; i++) {
		const name = accounts[i][0]
		for (let j = 1; j < accounts[i].length; j++) {
			const email = accounts[i][j]
			name_map[email] = name
			parent_map[email] = email // self
		}
	}

	for (let i = 0; i < accounts.length; i++) {
		for (let j = 2; j < accounts[i].length; j++) {
			union(accounts[i][1], accounts[i][j])
		}
	}
	// console.log(parent_map)

	const cc = {}
	for (let key in parent_map) {
		if (!cc[find(key)]) {
			cc[find(key)] = [key]
		} else {
			cc[find(key)].push(key)
		}
	}
	// console.log(cc)
	const result = []
	for (let key in cc) {
		const ele = [name_map[key], ...(cc[key].sort())]
		result.push(ele)
	}
	return result
	function find(x) {
		if (parent_map[x] != x) {
			return find(parent_map[x])
		}
		return x
	}

	function union(x, y) {
		if (find(x) == find(y)) {
			return false
		}
		parent_map[find(x)] = find(y)
		return true
	}
};

const ans1 = accountsMerge([["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]])
console.log(ans1)
