function preorder_iteration(root) {
	// root, left, right
	if (!root) {
		return []
	}
	const stack = [root]
	const result = []

	while (stack.length) {
		const node = stack.pop()
		result.push(node.val)

		if (node.right) {
			stack.push(node.right)
		}

		if (node.left) {
			stack.push(node.left)
		}
	}
	return result
}
