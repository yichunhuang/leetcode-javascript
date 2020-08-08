
/**
 * @param {Array<number>} arr
 * @param {number} k
 * @return {Array<number>}
 */

class minHeap {
	constructor() {
		this.heap = []
		this.count = 0
	}

	insert(element) {
		let current_index = this.count
		this.heap[current_index] = element
		this.count++

		while (true) {
			if (!this.getParent(current_index).value) {
				break
			}
			if (this.getParent(current_index).value > this.heap[current_index]) {
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

	popMin() {
		const min = this.getMin()
		if (!min) {
			return
		}
		this.heap[0] = this.heap[this.count - 1]
		this.count--
		let current_index = 0
		while (true) {
			const { key: left_key, value: left_value } = this.getLeftChild(current_index)
			const { key: right_key, value: right_value } = this.getRightChild(current_index)
			let key
			let value
			if (left_value < right_value) {
				value = left_value
				key = left_key
			} else {
				value = right_value
				key = right_key
			}
			if (value < this.heap[current_index]) {
				const tmp = this.heap[key]
				this.heap[key] = this.heap[current_index]
				this.heap[current_index] = tmp
				current_index = key
			} else {
				break
			}
		}
		return min
	}

	getMin() {
		return this.count ? this.heap[0] : null
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

const sortNearlySortedArray = (arr, k) => {
	const min_heap = new minHeap()
	for (let i = 0; i < k + 1; i++) {
		min_heap.insert(arr[i])
	}

	const result = []
	for (let i = 0; i < arr.length; i++) {
		const min = min_heap.popMin()
		result.push(min)
		if (arr[i + k + 1]) {
			min_heap.insert(arr[i + k + 1])
		}
	}
	return result
}

// const ans = sortNearlySortedArray([3, 4, 1, 2, 5], 2)
// console.log(ans)
