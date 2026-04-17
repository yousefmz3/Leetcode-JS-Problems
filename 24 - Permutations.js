/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [];
    function backTrack(current, remaining) {
        if (remaining.length === 0) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            current.push(remaining[i]);
            let newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
            backTrack(current, newRemaining);
            current.pop();
        }
    }

    backTrack([], nums);
    return result;
};