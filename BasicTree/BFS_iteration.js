function BFSiteration(root) {
	const queue = [root]
	const result = []
	while (queue.length) {
		const current = queue.shift()
		result.push(current.val)
		if (current.left) {
			queue.push(current.left)
		}
		if (current.right) {
			queue.push(current.right)
		}
	}
	return result
}
