/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

/*
解題思路
1. 二元樹用 inorder 排序：可以將節點的 value 排序成 sorted array
Time complexity: O(n)
Space complexity: O(n)

2. 從排序好的 sorted array of value 重新建一個 balanced 二元樹
Same as LC 108 Converted Sorted Array to BST
Time complexity: O(n)
Space complexity: O(log n)
*/
var balanceBST = function(root) {
  let vals = []

  // inorder
  let inorder = (node) => {
    if (!node) 
      return
    inorder(node.left)
    vals.push(node.val)
    inorder(node.right) 
  }

  // rebuild
  let build = (left, right) => {
    if (left > right)
      return null
    const middle = parseInt ((left + right) / 2)
    const root = new TreeNode(vals[middle])
    root.left = build(left, middle - 1)
    root.right = build(middle + 1, right)
    return root
  }

  inorder(root)
  return build(0, vals.length - 1)
};
