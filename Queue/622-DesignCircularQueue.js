class MyCircularQueue {
	constructor(k = 0) {
		this.head = 0
		this.tail = 0
		this.size = 0
		this.queue = new Array(k)
	}

	/**
	* Insert an element into the circular queue. Return true if the operation is successful.
	* @param {number} value
	* @return {boolean}
	*/
	enQueue(value) {
		if (this.isFull()) {
			this.resize()
		}

		this.queue[this.tail] = value
		this.tail = (this.tail + 1) % this.queue.length
		this.size++
		return true
	}

	resize() {
		const tmp = (this.tail == this.head) ? [...this.queue.slice(this.head), ...this.queue.slice(0, this.head)] : this.queue
		this.head = 0
		this.tail = this.size
		this.queue = tmp.concat(new Array(this.size))
	}


	/**
	* Delete an element from the circular queue. Return true if the operation is successful.
	* @return {boolean}
	*/
	deQueue() {
		if (this.isEmpty()) {
			return false
		}
		const dequeue = this.queue[this.head]
		this.queue[this.head] = null
		this.head = (this.head + 1) % this.queue.length
		this.size--
		return dequeue
	}

	/**
	* Get the front item from the queue.
	* @return {number}
	*/
	Front() {
		return this.queue[this.head]
	}

	/**
 * Get the last item from the queue.
 * @return {number}
 */
	Rear() {
		return this.tail == 0 ? this.queue[this.queue.length - 1] : this.queue[this.tail - 1]
	}

	/**
	 * Checks whether the circular queue is empty or not.
	 * @return {boolean}
	 */
	isEmpty() {
		if (this.size == 0) {
			return true
		}
		return false
	}

	/**
	 * Checks whether the circular queue is full or not.
	 * @return {boolean}
	 */
	isFull() {
		if (this.size == this.queue.length) {
			return true
		}
		return false
	}
}
const queue = new MyCircularQueue(2)
console.log(queue.queue)
queue.enQueue(1)
queue.enQueue(2)
console.log(queue.queue)
queue.deQueue()
console.log(queue.queue)
queue.enQueue(3)
console.log(queue.queue)
queue.enQueue(4)
console.log(queue.queue)
