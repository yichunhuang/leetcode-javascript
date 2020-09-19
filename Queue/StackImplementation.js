/*
time: O(1) amortized
space: O(n)
*/
class StackImplementation {
	constructor() {
		this.push = []
		this.pop = []
	}

	enqueue(value) {
		this.push.push(value)
	}

	dequeue() {
		if (this.pop.length > 0) {
			return this.pop.pop()
		}
		if (this.push.length == 0) {
			return null
		}

		while (this.push.length) {
			this.pop.push(this.push.pop())
		}
		return this.pop.pop()
	}
}

const queue = new StackImplementation()
queue.enqueue(1)
console.log(queue)
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
