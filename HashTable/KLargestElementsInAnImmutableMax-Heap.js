/**
 * @param {Array<number>} immutableHeap
 * @param {number} k
 * @return {Array<number>}
 */

/*
key point: maintain 一個 candidate array
*/
class maxHeap {
	constructor(heap) {
		this.heap = heap
		this.candidate = [{ key: 0, value: heap[0] }]
		this.count = 0
	}

	insert(element) {
		let current_index = this.count
		this.heap[current_index] = element
		this.count++
		if (count == 1) {
			this.candidate.push({ key: 0, value: element })
		}

		while (true) {
			if (!this.getParent(current_index).value) {
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
		const { key, value } = this.getMax()
		if (isNaN(key)) {
			return
		}
		const left_child = this.getLeftChild(key)
		const right_child = this.getRightChild(key)
		this.candidate.push(this.getLeftChild(key))
		this.candidate.push(this.getRightChild(key))
		return value
	}

	getMax() {
		this.candidate = this.candidate.sort((a, b) => a.value - b.value)
		return this.candidate.pop() || {}
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
const kLargestInImmutableHeap = (immutableHeap, k) => {
	const max_heap = new maxHeap(immutableHeap)
	const result = []
	for (let i = 0; i < k; i++) {
		const max = max_heap.popMax()
		result.push(max)
	}
	return result
}

const ans = kLargestInImmutableHeap([17, 7, 16, 2, 3, 15, 14], 2)
console.log({ ans })
