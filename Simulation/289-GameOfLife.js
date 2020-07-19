/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/*
解題思路
Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

會活下來的：
lives == 3 || lives - cell == 3

In-place:
cell >>= 1
Time Complexity: O(mn)
Space complexity: O(1)
*/
var gameOfLife = function (board) {
	const row = board.length
	const column = board[0].length
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < column; j++) {

			// 計算九宮格內的存活 cell lives
			let lives = 0
			for (let y = Math.max(0, i - 1); y < Math.min(row, i + 2); y++) {
				for (let x = Math.max(0, j - 1); x < Math.min(column, j + 2); x++) {
					lives += board[y][x] & 1
				}
			}
			// 存活與否記在十位數
			if (lives == 3 || (lives - board[i][j]) == 3) {
				board[i][j] |= 0b10
			}
		}
	}

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < column; j++) {
			board[i][j] >>= 1
		}
	}
	return board
};

const result = gameOfLife([
	[0, 1, 0],
	[0, 0, 1],
	[1, 1, 1],
	[0, 0, 0]
])
console.log(result)
