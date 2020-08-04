/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */


class maxHeap {
	constructor() {
		this.heap = []
		this.count = 0
	}

	insert(element) {
		let current_index = this.count
		this.heap[current_index] = element
		this.count++

		while (true) {

			if (isNaN(this.getParent(current_index).value)) {
				break
			}
			if (this.getParent(current_index).value < this.heap[current_index]) {
				const { key } = this.getParent(current_index)
				const tmp = this.heap[key]
				this.heap[key] = this.heap[current_index]
				this.heap[current_index] = tmp
				current_index = key
			} else {
				break
			}
		}
	}

	popMax() {
		const max = this.getMax()
		if (isNaN(max)) {
			return
		}
		this.heap[0] = this.heap[this.count - 1]
		this.heap[this.count - 1] = undefined
		this.count--
		let current_index = 0
		while (true) {
			const { key: left_key, value: left_value } = this.getLeftChild(current_index)
			const { key: right_key, value: right_value } = this.getRightChild(current_index)
			let key
			let value
			if (left_value > right_value || isNaN(right_value)) {
				value = left_value
				key = left_key
			} else {
				value = right_value
				key = right_key
			}
			if (value > this.heap[current_index]) {
				const tmp = this.heap[key]
				this.heap[key] = this.heap[current_index]
				this.heap[current_index] = tmp
				current_index = key
			} else {
				break
			}
		}
		return max
	}

	getMax() {
		return this.count ? this.heap[0] : undefined
	}

	getParent(index) {
		const key = (index - 1) / 2
		if (key < 0) {
			return {}
		}
		return { key: parseInt(key), value: this.heap[parseInt(key)] }
	}

	getLeftChild(index) {
		const key = index * 2 + 1
		return { key, value: this.heap[index * 2 + 1] }
	}

	getRightChild(index) {
		const key = index * 2 + 2
		return { key, value: this.heap[index * 2 + 2] }
	}
}

var mergeKLists = function (lists) {
	const max_heap = new maxHeap()
	lists.forEach(l => {
		let node = l
		while (node) {
			max_heap.insert(node.val)
			node = node.next
		}
	})
	let current_head
	while (!isNaN(max_heap.getMax())) {
		const max = max_heap.popMax()
		const node = new ListNode(max, current_head)
		current_head = node
	}
	return current_head || null
};
