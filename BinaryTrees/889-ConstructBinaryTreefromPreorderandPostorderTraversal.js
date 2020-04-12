/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */

/*
解題思路
pre: [root, left, right]
post: [left, right, root]
pre 的第一個元素會是該 subtree 的 root
pre 的第二個元素會是該 subtree 左子樹的 root
但左子樹有多長取決於左子樹的 root 在 post 的位置
左子樹的 root 在 post 位置之前的都是左子樹的範圍

Time complexity: O(nlogn) ~ O(n^2)
*/
var constructFromPrePost = function(pre, post) {
    if (!pre || pre.length == 0) {
        return null
    }
    const root = new TreeNode(pre[0]) 
    if (pre.length == 1) {
        return new TreeNode(pre[0])
    }
    const left_start = 1
    const left_end = post.indexOf(pre[left_start]) + 1
    root.left = constructFromPrePost(pre.slice(left_start, left_end + 1),post.slice(0, left_end))
    root.right = constructFromPrePost(pre.slice(left_end + 1), post.slice(left_end, post.length - 1))
    return root
};