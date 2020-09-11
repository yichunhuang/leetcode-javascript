/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
/*

解題思路
每個 connection 只要不是同一個 parent 都連起來
已經是同個 parent 則 save one count
最後看有幾個 connected component
return count > (cc - 1) ? (cc - 1) : -1
*/
var makeConnected = function (n, connections) {
	class UnionFind {
		constructor(size) {
			this.parent = new Array(size)
			this.rank = new Array(size)
			// this.topLine = new Array(size);
			// this.bottomLine = new Array(size);
			for (let i = 0; i < size; i++) {
				this.parent[i] = i
				this.rank[i] = 0
			}
		}

		find(x) {
			if (this.parent[x] !== x) {
				this.parent[x] = this.find(this.parent[x])
			}
			return this.parent[x];
		}

		connected(x, y) {
			return this.find(x) == this.find(y)
		}

		union(x, y) {
			let xr = this.find(x);
			let yr = this.find(y);
			if (xr === yr) {
				return false; // already have the same parent
			} else if (this.rank[xr] < this.rank[yr]) {
				this.parent[xr] = yr
			} else if (this.rank[xr] > this.rank[yr]) {
				this.parent[yr] = xr
			} else {
				// same height
				this.parent[yr] = xr
				this.rank[xr]++
			}
			return true
		}
	}
	let coda = 0, cc_number = 0, map = {}
	const UF = new UnionFind(n)
	for (let i = 0; i < connections.length; i++) {
		if (UF.connected(connections[i][0], connections[i][1])) {
			coda++
		} else {
			UF.union(connections[i][0], connections[i][1])
		}
	}

	for (let i = 0; i < n; i++) {
		if (!map[UF.find(i)]) {
			map[UF.find(i)] = true
			cc_number++
		}
	}
	return coda >= (cc_number - 1) ? (cc_number - 1) : -1
};

const ans1 = makeConnected(6, [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3]])
console.log(ans1) // 2

const ans2 = makeConnected(6, [[0, 1], [0, 2], [0, 3], [1, 2]])
console.log(ans2) // -1
