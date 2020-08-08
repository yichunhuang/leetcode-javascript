
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function split(node) {
	// find the mid
	let prev = null
	let slow = node
	let fast = node
	while (fast && fast.next) {
		prev = slow
		slow = slow.next
		fast = fast.next.next
	}

	prev.next = null
	return slow
}

function merge(leftHalf, rightHalf) {
	const dummyHead = new ListNode(0)
	let current = dummyHead
	while (leftHalf && rightHalf) {
		if (leftHalf.val < rightHalf.val) {
			current.next = leftHalf
			leftHalf = leftHalf.next
		} else {
			current.next = rightHalf
			rightHalf = rightHalf.next
		}
		current = current.next
	}
	if (leftHalf) {
		current.next = leftHalf
	}
	if (rightHalf) {
		current.next = rightHalf
	}
	return dummyHead.next
}
const mergeSort = (head) => {
	// base case
	if (head === null || head.next === null) {
		return head
	}
	const mid = split(head)

	const leftHalf = mergeSort(head)
	const rightHalf = mergeSort(mid)

	return merge(leftHalf, rightHalf)
}
