/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */

/*
解題思路
query(l, r) = query(0, r) ^ query(0, l - 1)
所以只要找出 0 到每一個位置的 XOR 結果，再根據陣列進行運算
Time complexity: O(n) + O(q)
Space complexity: O(n)
*/

var xorQueries = function(arr, queries) {
    const xor = []
    xor[0] = 0 // init
    for(let i = 0; i < arr.length; i++) {
        xor[i + 1] = arr[i] ^ xor[i]
    }
    console.log('xor', xor)

    const ans = []
    for (let i = 0; i < queries.length; i++) {
        const left = queries[i][0]
        const right = queries[i][1]
        // console.log('left', left, 'right', right)
        console.log(xor[right + 1], xor[left], xor[right + 1] ^ xor[left])
        ans.push(xor[right + 1] ^ xor[left])
    }
    return ans
};

console.log(xorQueries([1,3,4,8], [[0,1],[1,2],[0,3],[3,3]]))

