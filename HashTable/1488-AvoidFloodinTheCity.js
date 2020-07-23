/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function (rains) {
	const sunny_day = [], lake_last_rain_day = {}, result = []
	for (let i = 0; i < rains.length; i++) {
		const lake = rains[i]
		// console.log({ sunny_day, lake_last_rain_day, result })
		if (lake == 0) {
			sunny_day.push(i)
			result[i] = 9999 // for unuse sunny day
		} else {
			if (lake_last_rain_day[lake] !== undefined) {
				let flag = false
				for (let j = 0; j < sunny_day.length; j++) {
					if (sunny_day[j] > lake_last_rain_day[lake]) {
						result[sunny_day[j]] = lake
						sunny_day.splice(j, 1)
						flag = true
						break
					}
				}
				if (!flag) {
					return []
				}
			}
			lake_last_rain_day[lake] = i
			result[i] = -1
		}
	}
	return result
};

// const result1 = avoidFlood([1, 2, 0, 1, 2])
// console.log('result1', result1)

// const result2 = avoidFlood([1, 2, 0, 0, 2, 1])
// console.log('result2', result2)

// const result3 = avoidFlood([1, 2, 0, 1, 2])
// console.log('result3', result3)

// const result4 = avoidFlood([69, 0, 0, 0, 69])
// console.log('result4', result4)

// const result5 = avoidFlood([0, 1, 1])
// console.log('result5', result5)
