// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  function PalindromeRange(s, left, right) {
    while (right > left) {
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  while (right > left) {
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return (
        PalindromeRange(s, left + 1, right) ||
        PalindromeRange(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};
