/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
   const ans = []
   for (let i = left; i <= right; i++) {
     let currentValue = i
     let flag = true
     while (currentValue && flag) {
       const digit = currentValue % 10
       if (!digit || i % digit) { // digit == 0 is invalid by question description
         flag = false
         break
       }
       currentValue = parseInt(currentValue / 10)
     }
     if (flag) ans.push(i)
   } 
   return ans
};

// console.log(selfDividingNumbers(1, 22))
