/**
 * @param {number[]} row
 * @return {number}
 */
/*
解題思路
如果在位置 2i 和 2i +1 的人不是 couple
那這兩對 couple 就要交換一次位置
利用UnionFind
只要交換一次就把這兩對 couple cc 起來 並計次數
已經 cc 過的就不用再換了代表他們位置是對的

couple 在 UF 裡是同一節點，操作的技巧用 Math.floor
*/

var minSwapsCouples = function (row) {
	class UnionFind {
		constructor(size) {
			this.parent = []
			for (let i = 0; i < size; i++) {
				this.parent[i] = i
			}
		}

		find(key) {
			if (this.parent[key] != key) {
				return this.find(this.parent[key])
			}
			return key
		}

		union(key1, key2) {
			this.parent[this.find(key1)] = this.find(key2)
		}
	}

	let result = 0
	const n = parseInt(row.length / 2)
	const UF = new UnionFind(n)
	for (let i = 0; i < n; i++) { // 第 i 組 couple
		const a = Math.floor(row[2 * i] / 2)
		const b = Math.floor(row[2 * i + 1] / 2)
		if (UF.find(a) != UF.find(b)) {  // 非 couple 或 非連結過的 couples
			result++
			UF.union(a, b)
		}
	}
	return result
};


const ans1 = minSwapsCouples([0, 2, 1, 3])
console.log(ans1) // 1

const ans2 = minSwapsCouples([3, 2, 0, 1])
console.log(ans2) // 0
