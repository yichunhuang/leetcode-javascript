/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

/*
解題思路
紀錄每個數字出現的頻率
紀錄每個 sequence 的起始值

起始值找法
一開始先遍歷找尋 freq[i] > 0 && freq[i - 1] == 0，i則為起始值
在抵銷頻率的過程中，若有一個值被抵銷後頻率為 0，且它的下一個值頻率大於 0，則下一個值為找到的新的起始值
i.e. freq[s + k] -= freq[s], 若 freq[s + k] == 0 且 freq[s + k + 1] > 0，則 s + k + 1 為新的起始值

Time complexity: O(n)
Space complexity O(n)
*/
var isPossibleDivide = function(nums, k) {
    let freq = new Map()
    let starts = []
    nums.forEach(num => {
        freq.set(num, (freq.get(num) || 0) + 1)
    })

    freq.forEach((_value, key) => {
        if (freq.get(key) && !freq.get(key - 1)) {
            starts.push(key)
        }
    })
    
    while (starts.length) {
        const s = starts.pop()
        for (let t = s + k - 1; t >= s; t--) {
            if (!freq.get(t) || freq.get(t) < freq.get(s)) {
                return false
            }
            freq.set(t, freq.get(t) - freq.get(s))
            if (!freq.get(t) && freq.get(t + 1)) {
                starts.push(t + 1)
            }
        }
    }
    return true
};

console.log(isPossibleDivide([3,3,2,2,1,1], 3))