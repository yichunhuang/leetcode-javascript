function inorder_iteration(root) {
	// left, root, right
	if (!root) {
		return []
	}
	const stack = []
	const result = []
	let current = root
	while (current || stack.length) {
		if (current) {
			stack.push(current)
			current = current.left
		} else {
			current = stack.pop()
			result.push(current.val)
			current = current.right
		}
	}
}
