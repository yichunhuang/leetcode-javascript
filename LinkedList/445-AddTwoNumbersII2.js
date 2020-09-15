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
	/*
	stack 比較好實作
	a + b
	a
	b
	carry
	*/
	const arr1 = []
	while (l1) {
		arr1.push(l1.val)
		l1 = l1.next
	}

	const arr2 = []
	while (l2) {
		arr2.push(l2.val)
		l2 = l2.next
	}

	let current = null
	let carry = 0
	while (arr1.length && arr2.length) {
		const a = arr1.pop()
		const b = arr2.pop()
		const remain = parseInt((a + b + carry) % 10)
		carry = parseInt((a + b + carry) / 10)
		const node = new ListNode(remain)
		node.next = current
		current = node
	}

	while (arr1.length) {
		const a = arr1.pop()
		const remain = parseInt((a + carry) % 10)
		carry = parseInt((a + carry) / 10)
		const node = new ListNode(remain)
		node.next = current
		current = node
	}

	while (arr2.length) {
		const b = arr2.pop()
		const remain = parseInt((b + carry) % 10)
		carry = parseInt((b + carry) / 10)
		const node = new ListNode(remain)
		node.next = current
		current = node
	}

	while (carry) {
		const remain = parseInt((carry) % 10)
		carry = parseInt((carry) / 10)
		const node = new ListNode(remain)
		node.next = current
		current = node
	}

	return current
};
