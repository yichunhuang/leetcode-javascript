/**
 * @param {number[][]} books
 * @param {number} shelf_width
 * @return {number}
 */

/*
DP[i - 1] := min height to place books [0 ~ i-1]
DP[j] = min{DP[i - 1] + max(h[i ~ j])}, 0 < i <= j

Time Complexity: O(n^2)
Space complexity: O(n)
*/
var minHeightShelves = function(books, shelf_width) {
    const DP = new Array(books.length).fill(Number.MAX_VALUE)
    for (let j = 0; j < books.length; j++) {
        let h = 0, w = 0
        for (let i = j; i >= 0; i--) {
            w += books[i][0]
            if (w > shelf_width) {
                break 
            }
            h = Math.max(h, books[i][1])
            DP[j] = Math.min(DP[j], (DP[i - 1] || 0) + h)
        }
    }
    return DP[DP.length - 1]
};

console.log(minHeightShelves([[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], 4))