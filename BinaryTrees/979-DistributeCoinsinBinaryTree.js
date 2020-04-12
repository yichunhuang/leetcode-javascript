/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/* 解題思路
從小孩開始 balance
postorder
遞迴回傳小孩平衡後的結果給 parent (可能為正或負)
並用 ans 紀錄每一個流動量

balance(root) = balance(left) + balance(right) + (root.val - 1)
ans += abs(balance(left)) + abs(balance(right))

Time complexity: O(n)
Space complexity: O(n)
*/
var distributeCoins = function(root) {
    let ans = 0

    let balance = (node) => {
        if (!node) {
            return 0
        }
        const l = balance(node.left)
        const r = balance(node.right)
        ans += Math.abs(l) + Math.abs(r)
        return l + r + node.val - 1
    }

    balance(root)

    return ans
};