/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	const result = []
	const stack = []
	let current_node = root
	while (current_node !== null || stack.length > 0) {
		while (current_node !== null) {
			stack.push(current_node)
			current_node = current_node.left
		}
		current_node = stack.pop()
		result.push(current_node.val)
		current_node = current_node.right
	}
	return result
};
