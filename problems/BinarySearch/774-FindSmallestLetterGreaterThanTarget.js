/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0, right = letters.length
    while (left < right) {
      const middle = Math.floor((left + right) / 2)
      letters[middle] <= target ? (left = middle + 1) : (right = middle)
    }
    return letters[left % (letters.length)] // wrap around
};
