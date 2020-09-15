function postorder_iteration(root) {
	// left, right, root
	if (!root) {
		return []
	}
	const stack = [root]
	const result = []
	while (stack.length) {
		const current = stack[stack.length - 1]
		if (!current.left && !current.right) {
			stack.pop()
			result.push(current.val)
		}

		if (current.right) {
			stack.push(current.right)
			current.right = null
		}

		if (current.left) {
			stack.push(current.left)
			current.left = null
		}
	}
	return result
}
