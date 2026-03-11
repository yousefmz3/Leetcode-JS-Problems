// You are given a 0-indexed string array words, where words[i] consists of lowercase English letters.
// In one operation, select any index i such that 0 < i < words.length and words[i - 1] and 
// words[i] are anagrams, and delete words[i] from words. Keep performing this operation as
// long as you can select an index that satisfies the conditions.
// Return words after performing all operations. 
// It can be shown that selecting the indices for each operation in any arbitrary 
// order will lead to the same result.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or 
// phrase using all the original letters exactly once. For example, "dacb" is an anagram of "abdc".

/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let result = [];
    let prevSorted = "";
    for (let i = 0 ; i < words.length ; i ++){
        let sorted = words[i].split("").sort().join("").trim(); // => Sorts the characters of the current word to create a standardized representation for anagram comparison
        if (sorted !== prevSorted){
            result.push(words[i]); // => If the sorted representation of the current word is different from the previous one, it means it's not an anagram of the previous word, so we add it to the result array
            prevSorted = sorted ;
        }
    }
    return result ;
};


