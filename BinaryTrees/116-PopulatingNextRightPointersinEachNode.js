/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

 /*
解題思路
二元樹大部分都是遞迴解
preorder, inorder, postorder 三者中選擇 preorder
因為 preorder (root -> left -> right) 會先對 parent 做事
此題下層需要利用上層的 next 
所以上層需要先連接好下層才能用

對一個節點而言
cur.left.next = cur.right
cur.right.next = cur.next.left

Time complexity: O(n)
Space complexity: O(log n)
 */
var connect = function(root) {
    if (!root || !root.left) {
        return root
    }
    root.left.next = root.right
    if (root.next) {
        root.right.next = root.next.left
    }
    connect(root.left)
    connect(root.right)
    return root
};