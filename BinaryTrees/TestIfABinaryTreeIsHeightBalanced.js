
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/*
node's height and if left and right diff <= 1
*/
const isBalanced = (root) => {
	const result = helper(root)
	if (result.is_balanced === false) {
		return false
	}
	return true

	function helper(node) {
		if (!node || !node.val) {
			return { is_balanced: true, height: 0 }
		}
		if (!node.left && !node.right) {
			return { is_balanced: true, height: 1 }
		}
		const left = helper(node.left)
		const right = helper(node.right)
		if (left.is_balanced === false || right === false) {
			return { is_balanced: false }
		}
		if (Math.abs(left.height - right.height) > 1) {
			return { is_balanced: false }
		}
		return { is_balanced: true, height: Math.max(left.height, right.height) + 1 }
	}
}
