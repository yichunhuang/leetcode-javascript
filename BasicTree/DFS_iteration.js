function DFSiteration(root) {
	const stack = [root]
	const result = []
	while (stack.length) {
		const current = stack.pop()
		result.push(current.val)
		if (current.left) {
			stack.push(current.left)
		}

		if (current.right) {
			stack.push(current.right)
		}
	}
	return result
}
