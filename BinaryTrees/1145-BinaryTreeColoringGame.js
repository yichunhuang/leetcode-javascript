/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */

/*
解題思路
考慮第一個玩家選擇的 node 的 parent 和兩個小孩
只要考慮選擇這三個其中一個第二個玩家就可以獲得
1. 左子樹：size(L)
2. 右子樹：size(R)
3. Parent：n - size(L) - size(R) - 1
三個其中一個大於 n/2 就贏了
*/
var btreeGameWinningMove = function(root, n, x) {
    let target_l, target_r

    function countChildren(node) {
        if (!node) {
            return 0
        }
        const l = countChildren(node.left)
        const r = countChildren(node.right)

        if (node.val == x) {
            target_l = l
            target_r = r
        }
        return l + r + 1
    }

    countChildren(root)

    return Math.max(target_l, target_r, (n - target_l - target_r - 1)) > parseInt(n / 2)
};