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
	const dummyHead = new ListNode(0)
	let current = dummyHead, carry = 0
	while (l1 && l2) {
		const add = l1.val + l2.val + carry
		current.next = new ListNode(add % 10)
		carry = parseInt(add / 10)
		current = current.next
		l1 = l1.next
		l2 = l2.next
	}
	while (l1) {
		const add = l1.val + carry
		current.next = new ListNode(add % 10)
		carry = parseInt(add / 10)
		current = current.next
		l1 = l1.next
	}

	while (l2) {
		const add = l2.val + carry
		current.next = new ListNode(add % 10)
		carry = parseInt(add / 10)
		current = current.next
		l2 = l2.next
	}

	if (carry > 0) {
		current.next = new ListNode(carry)
		current = current.next
	}
	return dummyHead.next
};
