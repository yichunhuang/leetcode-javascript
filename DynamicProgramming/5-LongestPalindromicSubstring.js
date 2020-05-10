/**
 * @param {string} s
 * @return {string}
 */

/*
解題思路
從中心開始往外延伸
如果內層是回文，只要檢查左右兩點是否相同則能確定是否也是回文
如果內層不是回文，那外層也一定不是回文，可跳過

有奇數偶數長度之分

每一個起點最壞都要檢查到 n 個元素(整串是回文)，共有 n 個起點(每一個點都可以當內層起點)

Time complexity: best O(n), worst O(n^2)
Space complexity: O(1) // 本題不需要儲存 DP
*/
var longestPalindrome = function(s) {
    let maxLen = 0, startIndex = undefined
    for (let i = 0; i < s.length; i++) {
        const oddLen = getLen(i, i)
        const evenLen = getLen(i, i + 1)
        const curMaxLen = Math.max(oddLen, evenLen)
        if (curMaxLen > maxLen) {
            maxLen = curMaxLen
            startIndex = i - Math.floor((curMaxLen - 1) / 2)
            console.log('startIndex', startIndex)
        }
    }

    function getLen (left, right) {
        while(left >= 0 && right < s.length && s[left] == s[right]) {
            left --
            right ++
        }
        return right - left - 1
    }

    return s.substring(startIndex, startIndex + maxLen)
};

console.log(longestPalindrome('a'))