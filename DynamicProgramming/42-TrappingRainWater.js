/**
 * @param {number[]} height
 * @return {number}
 */
/*
解題思路
for column[i], the rain it can trap:
rain[i] = min( max(h[0 ~ i]), max(h[i ~ n-1]) ) - h[i]
ans = sum(rain[0 ~ n-1])

DP 紀錄已經計算過的
l[i] := max(h[0~i])
r[i] := max(h[i~n-1])
l[i] = max(h[i], l[i-1])
r[i] = max(h[i], r[i+1])

Time Complexity: O(n)
Space Complex: O(n)
*/
var trap = function (height) {
	const n = height.length
	const L = [], R = []
	for (let i = 0; i < n; i++) {
		L[i] = i == 0 ? height[i] : Math.max(height[i], L[i - 1])
	}
	for (let i = n - 1; i >= 0; i--) {
		R[i] = i == (n - 1) ? height[i] : Math.max(height[i], R[i + 1])
	}
	let result = 0
	for (let i = 0; i < n; i++) {
		result += Math.min(L[i], R[i]) - height[i]
	}
	return result
}
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
