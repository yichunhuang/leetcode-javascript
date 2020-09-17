function mergeSort(head) {
	// linked list
	if (!head || !head.next) {
		return head
	}
	// partition -> mergeSort -> merge
	const index = partition(head)
	const left = mergeSort(head)
	const right = mergeSort(index)

	return merge(left, right)
}

function partition(head) {
	let prev = null
	let slow = head
	let fast = head
	while (fast && fast.next) {
		prev = slow
		slow = slow.next
		fast = fast.next.next
	}
	prev.next = null // 斷開一半
	return slow
}

function merge(left, right) {
	const dummyHead = new ListNode(0)
	let current = dummyHead
	while (left && right) {
		if (left.val < right.val) {
			current.next = left
			left = left.next
		} else {
			current.next = right
			right = right.next
		}
		current = current.next
	}

	if (left) {
		current.next = left
	}

	if (right) {
		current.next = right
	}
	return dummyHead.next
}
