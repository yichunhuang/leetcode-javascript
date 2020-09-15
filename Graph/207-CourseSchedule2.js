/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
	const map = {}
	const state = [] // 0: not visit, 1: visiting, 2: visited
	for (let i = 0; i < numCourses; i++) {
		state[i] = 0
		map[i] = []
	}
	for (const [key, value] of prerequisites) {
		map[key].push(value)
	}

	for (let i = 0; i < numCourses; i++) {
		if (state[i] == 2) {
			continue
		}
		if (helper(i) == false) {
			return false
		}
	}
	return true

	function helper(index) {
		if (index == undefined) {
			return true
		}
		if (state[index] == 1) {
			return false
		}
		if (state[index] == 2) {
			return true
		}
		state[index] = 1
		const pre = map[index]
		let result = true
		for (const p of pre) {
			if (helper(p) == false) {
				result = false
			}
		}
		state[index] = 2
		return result
	}
};

console.log(canFinish(3, [[1, 0], [1, 2], [0, 1]]))
