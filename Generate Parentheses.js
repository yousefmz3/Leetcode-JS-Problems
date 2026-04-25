/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];

  var BackTrack = function (str, open, close) {
    if (str.length === n * 2) {
      result.push(str);
    }

    if (open < n) {
      BackTrack(str + "(", open + 1, close);
    }

    if (close < open) {
      BackTrack(str + ")", open, close + 1);
    }
  };

  BackTrack("", 0, 0);
  return result;
};
