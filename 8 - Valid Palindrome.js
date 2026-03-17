// A phrase is a palindrome if, after converting all uppercase letters into 
// lowercase letters and removing all non-alphanumeric characters, it reads 
// the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let clean = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = clean.length - 1;
    while (right > left) {
        if (clean[left] !== clean[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};