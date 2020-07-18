/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
/*
for y in 1..n:
	for x in 1..m:
		if search(x, y, idx): return true
return false

search(x, y ,d)
	if out_of_bound(x, y): return false
	if word[d] != grid[y][x]: return false
	if d == word.length: return true
	return search(x-1, y, d+1)
	|| search(x+1, y, d+1)
	|| search(x, y-1, d+1)
	|| search(x, y+1, d+1)
*/
var exist = function (board, word) {
	const search = function (x, y, idx) {
		if (y >= board.length || x >= board[0].length || x < 0 || y < 0) {
			return false
		}
		if (word[idx] != board[y][x]) {
			return false
		}
		if (idx == word.length - 1) {
			return true
		}
		// 題目規定不可以重複使用同一個字符，所以使用過的必須暫時被設為 0
		// ，等找完下一層的要復原，才能正常給其他人使用
		const cur = board[y][x]
		board[y][x] = 0
		const found = search(x - 1, y, idx + 1)
			|| search(x + 1, y, idx + 1)
			|| search(x, y - 1, idx + 1)
			|| search(x, y + 1, idx + 1)
		board[y][x] = cur
		return found
	}

	const row = board.length
	const column = board[0].length
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < column; j++) {
			if (search(j, i, 0)) {
				return true
			}
		}
	}
	return false
};

const result = exist([
	['A', 'B', 'C', 'E'],
	['S', 'F', 'C', 'S'],
	['A', 'D', 'E', 'E']
], "ABCB")
console.log('result', result)
