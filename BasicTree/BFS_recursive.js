function BTSrecursive(root) {
	const result = []
	const queue = [root]

	helper()
	return result
	function helper() {
		if (!queue.length) {
			return
		}
		const current = queue.shift()
		result.push(current.val)
		if (current.left) {
			queue.push(current.left)
		}
		if (current.right) {
			queue.push(current.right)
		}
		helper()
	}
}
