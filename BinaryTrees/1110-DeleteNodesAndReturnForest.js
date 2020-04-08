/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */

/*
解題思路
二元樹大部分用遞迴解
post-order 比 in-order pre-order 好
如果先把 root / parent 刪掉，會拿不到 child node

local view
- node 沒被刪除，直接回傳 node 給 parent
- node 有被刪除，將左子樹、右子樹放進 forest array，回傳 none 給 parent
*/
var delNodes = function(root, to_delete) {
    const ans = []
    let postOrderDel = (node) => {
        if (!node) {
            return node
        }

        node.left = postOrderDel(node.left)
        node.right = postOrderDel(node.right)
        if (!to_delete.includes(node.val)) {
            return node
        } else {
            if (node.left) {
                ans.push(node.left)
            }
            if (node.right) {
                ans.push(node.right)
            }
            return null
        }
    }
    root = postOrderDel(root)
    if (root) {
        ans.push(root)
    }
    return ans
};