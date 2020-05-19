/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

/*
DP[i] := Math.max(A[1] ~ A[i])
DP[0] := 0
DP[i] := Math.max(DP[i - K] + K * Math.max(A[i - K + 1] ~ A[i])), for 1 ~ K

Ans := DP[n]

Time Complexity: O(n*k)
Space Complexity: O(n)
 */
var maxSumAfterPartitioning = function(A, K) {
    const DP = new Array(A.length + 1).fill(0)
    for (let i = 1; i <= A.length; i++) {
        for (let k = 1; k <= Math.min(i, K); k++) {
            DP[i] = Math.max(DP[i], DP[i - k] + k * Math.max(...A.slice(i - k, i)))
        }
    }
    return DP[DP.length - 1]
};

console.log(maxSumAfterPartitioning([1,15,7,9,2,5,10], 3)) //84