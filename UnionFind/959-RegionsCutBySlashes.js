/**
 * @param {string[]} grid
 * @return {number}
 */

/* 這題想不到
看詳解是說直接把 grid 切成四個小三角形在用 UF 解
*/
var regionsBySlashes = function (grid) {
	const n = grid.length
	const parent_map = {}

	for (let row = 0; row < n; row++) {
		for (let col = 0; col < n; col++) {
			for (let k = 0; k < 4; k++) {
				const key = `${row}-${col}-${k}`
				parent_map[key] = key
			}
		}
	}

	for (let row = 0; row < n; row++) {
		for (let col = 0; col < n; col++) {
			if (grid[row][col] == " ") {
				union(`${row}-${col}-${0}`, `${row}-${col}-${1}`)
				union(`${row}-${col}-${0}`, `${row}-${col}-${2}`)
				union(`${row}-${col}-${0}`, `${row}-${col}-${3}`)

				if (col > 0) {
					union(`${row}-${col - 1}-${2}`, `${row}-${col}-${0}`)
				}

				if (col < n - 1) {
					union(`${row}-${col + 1}-${0}`, `${row}-${col}-${2}`)
				}

				if (row > 0) {
					union(`${row - 1}-${col}-${3}`, `${row}-${col}-${1}`)
				}

				if (row < n - 1) {
					union(`${row + 1}-${col}-${1}`, `${row}-${col}-${3}`)
				}
			} else if (grid[row][col] == "/") {
				union(`${row}-${col}-${0}`, `${row}-${col}-${1}`)
				union(`${row}-${col}-${2}`, `${row}-${col}-${3}`)

				if (col > 0) {
					union(`${row}-${col - 1}-${2}`, `${row}-${col}-${0}`)
				}

				if (col < n - 1) {
					union(`${row}-${col + 1}-${0}`, `${row}-${col}-${2}`)
				}

				if (row > 0) {
					union(`${row - 1}-${col}-${3}`, `${row}-${col}-${1}`)
				}

				if (row < n - 1) {
					union(`${row + 1}-${col}-${1}`, `${row}-${col}-${3}`)
				}
			} else if (grid[row][col] == "\\") {
				union(`${row}-${col}-${1}`, `${row}-${col}-${2}`)
				union(`${row}-${col}-${0}`, `${row}-${col}-${3}`)

				if (col > 0) {
					union(`${row}-${col - 1}-${2}`, `${row}-${col}-${0}`)
				}

				if (col < n - 1) {
					union(`${row}-${col + 1}-${0}`, `${row}-${col}-${2}`)
				}

				if (row > 0) {
					union(`${row - 1}-${col}-${3}`, `${row}-${col}-${1}`)
				}

				if (row < n - 1) {
					union(`${row + 1}-${col}-${1}`, `${row}-${col}-${3}`)
				}
			}
		}
	}

	let cc = 0
	// console.log(parent_map)
	for (key in parent_map) {
		if (key == find(key)) {
			cc++
		}
	}

	return cc
	function find(x) {
		if (parent_map[x] != x) {
			return find(parent_map[x])
		}
		return x
	}

	function union(x, y) {
		parent_map[find(x)] = find(y)
	}
};

// const ans1 = regionsBySlashes([
// 	" /",
// 	"/ "
// ])

// console.log(ans1) // 2

// const ans2 = regionsBySlashes([
// 	"\\/",
// 	"/\\"
// ])

// console.log(ans2) // 4


const ans3 = regionsBySlashes(["/\\", "\\/"])
console.log(ans3) //
