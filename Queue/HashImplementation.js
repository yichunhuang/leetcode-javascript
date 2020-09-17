class Node {
	constructor(value) {
		this.value = value
		this.next = null
		this.prev = null
	}
}

class HashImplementation {
	constructor() {
		this.hash_table = {}
		this.head = 0
		this.tail = 0
	}

	enqueue(value) {
		this.hash_table[this.tail++] = value
	}

	dequeue() {
		if (this.tail <= this.head) {
			return null
		}
		const value = this.hash_table[this.head]
		this.hash_table[this.head] = null
		this.head++

		if (this.head == this.tail) {
			// empty queue
			this.head = 0
			this.tail = 0
		}
		return value
	}
}

const queue = new HashImplementation()
queue.enqueue(1)
queue.enqueue(2)
console.log(queue.dequeue())
queue.enqueue(3)
console.log(queue.dequeue())
queue.enqueue(4)
queue.enqueue(5)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
