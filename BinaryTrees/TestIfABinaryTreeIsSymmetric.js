
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
	if (!root) {
		return true
	}
	return check(root.left, root.right)

	function check(node1, node2) {
		if (!node1 && !node2) {
			return true
		}
		if (!node1 && !!node2) {
			return false
		}
		if (!!node1 && !node2) {
			return false
		}
		if (node1.val !== node2.val) {
			return false
		}
		return check(node1.left, node2.right) && check(node1.right, node2.left)
	}
}
