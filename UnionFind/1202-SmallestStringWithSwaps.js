/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
	class UnionFind {
		constructor(size) {
			this.parent = new Array(size)
			for (let i = 0; i < size; i++) {
				this.parent[i] = i
			}
		}

		find(x) {
			if (this.parent[x] !== x) {
				this.parent[x] = this.find(this.parent[x])
			}
			return this.parent[x]
		}

		connected(x, y) {
			return this.find(x) == this.find(y)
		}

		union(x, y) {
			let xr = this.find(x)
			let yr = this.find(y)
			this.parent[xr] = yr
		}
	}

	const UF = new UnionFind(s.length)

	for (let i = 0; i < pairs.length; i++) {
		UF.union(pairs[i][0], pairs[i][1])
	}

	const queue = {}
	for (let i = 0; i < s.length; i++) {
		const letter = s[i]
		const root = UF.find(i)
		if (queue[root]) {
			queue[root].push(letter)
		} else {
			queue[root] = [letter]
		}
	}

	for (const root in queue) {
		queue[root].sort()
	}

	let result = ""
	for (let i = 0; i < s.length; i++) {
		const root = UF.find(i)
		result = result + queue[root][0]
		queue[root].splice(0, 1)
	}
	return result
};


const ans1 = smallestStringWithSwaps("dcab", [[0, 3], [1, 2]])
console.log(ans1) // "bacd"

const ans2 = smallestStringWithSwaps("dcab", [[0, 3], [1, 2], [0, 2]])
console.log(ans2) // "abcd"
