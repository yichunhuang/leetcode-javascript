// BFS iterative => queue
function traverseBFS(root) {
	let queue = [root]
	let res = []

	while (queue.length) {
		let curr = queue.shift()
		res.push(curr.key)

		if (curr.right) {
			queue.push(curr.right)
		}

		if (curr.left) {
			queue.push(curr.left)
		}
	}

	return res
}


// BFS recursive => 偷帶 queue 進去一起用
const queue = new Queue()
const result = []
recur(root, queue, result)
function recur(node, queue, result) {
	if (!node) {
		return
	}
	result.push(node.val)
	if (node.left) {
		queue.enqueue(node.left)
	}
	if (node.right) {
		queue.enqueue(node.right)
	}

	const next_node = queue.dequeue()
	recur(next_node, queue, result)
}

// DFS iterative => stack
function traverseDFS(root) {
	let stack = [root]
	let res = []

	while (stack.length) {
		let curr = stack.pop()
		res.push(curr.key)

		if (curr.right) {
			stack.push(curr.right)
		}

		if (curr.left) {
			stack.push(curr.left)
		}
	}

	return res.reverse()
}

// DFS recursive => call stack
