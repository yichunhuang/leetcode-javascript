class Node {
	constructor(value) {
		this.value = value
		this.next = null
		this.prev = null
	}
}

class LinkedListImplementation {
	constructor() {
		this.dummyHead = new Node(0)
		this.dummyTail = new Node(0)
		this.dummyHead.next = this.dummyTail
		this.dummyTail.prev = this.dummyHead
	}

	enqueue(value) {
		const oldFirst = this.dummyHead.next
		const newFirst = new Node(value)
		this.dummyHead.next = newFirst
		newFirst.next = oldFirst
		newFirst.prev = this.dummyHead
		oldFirst.prev = newFirst
	}

	dequeue() {
		const oldLast = this.dummyTail.prev
		if (oldLast == this.dummyHead) {
			return null
		}
		oldLast.prev.next = this.dummyTail
		this.dummyTail.prev = oldLast.prev
		return oldLast.value
	}
}

const queue = new LinkedListImplementation()
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
