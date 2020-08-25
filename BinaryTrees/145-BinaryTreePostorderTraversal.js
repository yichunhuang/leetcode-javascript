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
var postorderTraversal = function (root) {
	// left right root
	const result = []
	const stack = []
	let current = root
	while (stack.length > 0 || current !== null) {
		while (current !== null) {
			stack.push(current)
			current = current.left
		}
		if (stack[stack.length - 1].doneRight == true) {
			result.push(stack.pop().val)
		} else {
			current = stack[stack.length - 1].right
			stack[stack.length - 1].doneRight = true
		}
	}
	return result
};
