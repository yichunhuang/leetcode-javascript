
/**
 * @param {Array<number>} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
	if (nums.length == 0) {
		return null
	}
	if (nums.length == 1) {
		return new TreeNode(nums[0])
	}
	const mid = Math.floor(nums.length / 2)
	const node = new TreeNode(nums[mid])
	node.left = sortedArrayToBST(nums.slice(0, mid))
	node.right = sortedArrayToBST(nums.slice(mid + 1))
	return node
}
