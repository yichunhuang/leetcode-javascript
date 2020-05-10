/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
/*
解題思路
DP[y][x] := sum(grid[0:y][0:x]) = DP[y - 1][x] + DP[y][x - 1] - DP[y - 1][x - 1] + mat[y][x]
rangeSum(x1, y1, x2, y2) = DP[y2][x2] - DP[y2][x1 - 1] - DP[y1 - 1][x2] + DP[y1- 1][x1 - 1]
*/
var maxSideLength = function(mat, threshold) {
    // build DP
    const m = mat.length
    const n = mat[0].length
    const DP = new Array(m + 1).fill(0)
    for (let i = 0; i < m + 1; i++) {
        DP[i] = new Array(n + 1).fill(0)
    }
    for (let y = 1; y <= m; y++) {
        for (let x = 1; x <= n; x++) {
            DP[y][x] = DP[y - 1][x] + DP[y][x - 1] - DP[y - 1][x - 1] + mat[y - 1][x - 1]
        }
    }
    
    // get rangeSum function
    let rangeSum = (y1, x1, y2, x2) => DP[y2][x2] - DP[y2][x1 - 1] - DP[y1 - 1][x2] + DP[y1- 1][x1 - 1] 
    
    // find largest length for rangeSum
    let ans = 0
    for (let y = 1; y <= m; y++) {
        for (let x = 1; x <= n; x++) {
            for (let len = 0; y + len <= m && x + len <= n; len ++) {
                if (rangeSum(y, x, y + len, x + len) > threshold) {
                    break
                }
                ans = Math.max(ans, len + 1)
            }
        }
    }
    return ans
};

console.log(maxSideLength([[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]], 4))