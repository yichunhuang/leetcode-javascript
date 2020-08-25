
/**
 * @param {TreeNode} node
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (node, targetSum) => {
	let result = 0
	helper(node, 0)
	return result
	function helper(node, count) {
		if (!node) {
			return false
		}

		if (!node.left && !node.right && (node.val + count == targetSum)) {
			result++
			return true
		}

		count += node.val
		return helper(node.left, count) || helper(node.right, count)
	}
}
