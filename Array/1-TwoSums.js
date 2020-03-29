var twoSum = function(nums, target) {
    let diff = new Map, answer = [];
    for (let i = 0; i < nums.length; i++) {
      if (diff.has(nums[i])) {
        answer.push(diff.get(nums[i]), i);
        break;
      }
      else {
        diff.set(target - nums[i], i);
      }
    }
    return answer;
};
