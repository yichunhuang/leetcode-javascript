
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, x, y) => {
	if (x == root.val || y == root.val || (x < root.val && y > root.val)) {
		return root
	}
	if (x < root.val && y < root.val) {
		return lowestCommonAncestor(root.left, x, y)
	}
	if (x > root.val && y > root.val) {
		return lowestCommonAncestor(root.right, x, y)
	}
}
