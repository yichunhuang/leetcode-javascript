
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = (root) => {
	return check(root)
	function check(node) {
		if (!node || !node.val) {
			return true
		}
		if (node.left.val > node.val) {
			return false
		}

		if (node.right.val < node.val) {
			return false
		}
		return check(node.left) && check(node.right)
	}
}
