/**
 * @param {number[][]} stones
 * @return {number}
 */
/*
解題思路
先把同列或同行的 union
最多可以 remove 總石頭數量 - cc 數量
*/
var removeStones = function (stones) {
	const parent_map = {}
	for (let i = 0; i < stones.length; i++) {
		const key = getKey(stones[i])
		parent_map[key] = key
	}

	for (let i = 0; i < stones.length; i++) {
		for (let j = i + 1; j < stones.length; j++) {
			if (stones[i][0] != stones[j][0] && stones[i][1] != stones[j][1]) {
				continue
			}
			const key1 = getKey(stones[i])
			const key2 = getKey(stones[j])
			union(key1, key2)
		}
	}

	let cc = 0
	for (let key in parent_map) {
		if (key == find(key)) {  // keep only one
			cc++
		}
	}
	return stones.length - cc

	function getKey(ele) {
		return `${ele[0]}+${ele[1]}`
	}



	function find(key) {
		if (parent_map[key] != key) {
			return find(parent_map[key])
		}
		return key
	}

	function union(key1, key2) {
		if (parent_map[key1] == parent_map[key2]) {
			return false
		}
		parent_map[find(key1)] = find(key2)
		return true
	}

	function connected(key1, key2) {
		return find(key1) == find(key2)
	}
};

const ans1 = removeStones([[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]])
console.log(ans1) // 5

const ans2 = removeStones([[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]])
console.log(ans2) // 3

const ans3 = removeStones([[0, 0]])
console.log(ans3) // 0
