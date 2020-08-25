

function quickSort(arr) {

	helper(arr, 0, arr.length - 1)
	return arr

	function helper(arr, left, right) {
		if (left < right) {
			const index = split(arr, left, right)
			helper(arr, left, index - 1)
			helper(arr, index + 1, right)
		}
	}

	function split(arr, left, right) {
		const pivot = arr[right]
		let i = left - 1
		for (let j = left; j < right; j++) {
			if (arr[j] <= pivot) {
				i++
				const tmp = arr[i]
				arr[i] = arr[j]
				arr[j] = tmp
			}
		}

		i++
		const tmp = arr[i]
		arr[i] = arr[right]
		arr[right] = tmp
		return i
	}
}

const ans = quickSort([3, 5, 1, 10, 7])
console.log(ans)
