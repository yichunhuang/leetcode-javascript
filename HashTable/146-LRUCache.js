class Node {


}

class LRUCache {
	constructor(capacity) {
		this.capacity = capacity
		this.current_capacity = 0
		this.hash_table = {}
		this.head = new Node()
		this.tail = new Node()
		this.head.next = this.tail
		this.tail.prev = this.head
	}

	get(key) {
		const node = this.hash_table[key]
		if (node) {
			this.moveToFirst(node)
			return node.value
		} else {
			return -1
		}
		// move the key to the first place
		// get value and return
	}

	put(key, value) {
		if (this.hash_table[key]) {
			const node = this.hash_table[key]
			node.value = value
			this.moveToFirst(node)
			return node.value
		} else {
			const node = new Node()
			node.key = key
			node.value = value
			this.hash_table[key] = node
			node.prev = this.head
			node.next = this.head.next
			this.head.next.prev = node
			this.head.next = node
			this.current_capacity++
			if (this.current_capacity > this.capacity) {
				this.removeLast()
				this.current_capacity--
			}
		}
		// 1. update the key if exist and move to first place
		// 2. insert the key if dont exist and remove the last one from hash_table if over capacity
	}

	moveToFirst(node) {
		node.prev.next = node.next
		node.next.prev = node.prev
		node.prev = this.head
		node.next = this.head.next
		this.head.next.prev = node
		this.head.next = node
		return node
	}

	removeLast() {
		const node = this.tail.prev
		this.hash_table[node.key] = null
		this.tail.prev.prev.next = this.tail
		this.tail.prev = this.tail.prev.prev
	}
}
const cache = new LRUCache(2)

cache.put(1, 1)
cache.put(2, 2)
console.log(cache.get(1))      // returns 1
cache.put(3, 3)    // evicts key 2
console.log(cache.get(2))     // returns -1 (not found)
cache.put(4, 4)    // evicts key 1
console.log(cache.get(1))       // returns -1 (not found)
console.log(cache.get(3))       // returns 3
console.log(cache.get(4))       // returns 4
