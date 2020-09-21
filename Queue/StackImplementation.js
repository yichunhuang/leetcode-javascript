/*
time: O(1) amortized
space: O(n)
*/
class StackImplementation {
	constructor() {
		this.push = []
		this.pop = []

		this.max_queue = []
	}

	enqueue(value) {
		this.push.push(value)

		while (this.max_queue[this.max_queue.length - 1] && this.max_queue[this.max_queue.length - 1] < value) {
			this.max_queue.pop()
		}
		this.max_queue.push(value)
	}

	dequeue() {
		if (this.pop.length > 0) {
			const dequeue_value = this.pop.pop()
			if (dequeue_value == this.max_queue[0]) {
				this.max_queue.shift()
			}
			return dequeue_value
		}
		if (this.push.length == 0) {
			return null
		}

		while (this.push.length) {
			this.pop.push(this.push.pop())
		}

		const dequeue_value = this.pop.pop()
		if (dequeue_value == this.max_queue[0]) {
			this.max_queue.shift()
		}

		return dequeue_value
	}

	max() {
		return this.max_queue
	}
}

const queue = new StackImplementation()
queue.enqueue(1)
console.log(queue.max())
queue.enqueue(2)
console.log(queue.dequeue(), queue.max())
queue.enqueue(3)
console.log(queue.dequeue(), queue.max())
queue.enqueue(4)
queue.enqueue(5)
console.log(queue.dequeue(), queue.max())
console.log(queue.dequeue(), queue.max())
console.log(queue.dequeue(), queue.max())
console.log(queue.dequeue(), queue.max())
