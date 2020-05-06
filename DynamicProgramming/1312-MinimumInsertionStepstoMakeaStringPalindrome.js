/**
 * @param {string} s
 * @return {number}
 */

/*
解題思路
i := 從頭開始的指標
j := 從尾開始的指標
DP[i][j] := min inserts to make s[i (to) j] a palindrome
if s[i] == s[j] then DP[i][j] = 1 + DP[i + 1][j - 1]
else DP[i][j] = 1 + min(DP[i + 1][j], DP[i][j - 1])

Time Complexity: O(n^2)
Space Complexity: O(n^2)
*/
var minInsertions = function(s) {
    if (s.length < 2) return 0
    const DP = []
    for (let i = 0; i < s.length; i++) {
        DP[i] = []
    }
    for (let interval = 2; interval <= s.length; interval++) {
        for (let i = 0, j = interval - 1; j < s.length; i++, j++) {
            if (s[i] == s[j]) {
                DP[i][j] = DP[i + 1][j - 1] || 0
            } else {
                DP[i][j] = 1 + (Math.min(DP[i + 1][j], DP[i][j - 1]) || 0)
            }
        }
    }
    return DP[0][s.length - 1]
};

console.log(minInsertions("zzazz"))
console.log(minInsertions("mbgba"))
console.log(minInsertions("g"))