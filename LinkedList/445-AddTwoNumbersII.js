/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let l1_head = l1
	let l1_count = 0
	while (l1) {
		l1_count++
		l1 = l1.next
	}

	let l2_head = l2
	let l2_count = 0
	while (l2) {
		l2_count++
		l2 = l2.next
	}

	let dummyHead = new ListNode(0)
	let current = dummyHead

	let diff = l1_count - l2_count
	if (diff >= 0) {
		current.next = helper(l1_head, l2_head, diff)
	} else if (diff < 0) {
		current.next = helper(l2_head, l1_head, -diff)
	}

	if (current.next && current.next.val > 9) {
		const carry = parseInt(current.next.val / 10)
		current.next.val = parseInt(current.next.val % 10)
		const node = new ListNode(carry)
		node.next = current.next
		dummyHead.next = node
	}
	return dummyHead.next


	function helper(l1, l2, diff) {
		if (!l1) {
			return null
		}
		if (diff == 0) {
			const child = helper(l1.next, l2.next, 0)
			if (child && child.val > 9) {
				const carry = parseInt(child.val / 10)
				child.val = parseInt(child.val % 10)
				const node = new ListNode(l1.val + l2.val + carry)
				node.next = child
				return node
			} else {
				const node = new ListNode(l1.val + l2.val)
				node.next = child
				return node
			}
		} else {
			const child = helper(l1.next, l2, diff - 1)
			if (child && child.val > 9) {
				const carry = parseInt(child.val / 10)
				child.val = parseInt(child.val % 10)
				const node = new ListNode(l1.val + carry)
				node.next = child
				return node
			} else {
				const node = new ListNode(l1.val)
				node.next = child
				return node
			}
		}
	}
};
