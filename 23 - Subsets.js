/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let result = [];
    function backtrack(index, current) {
        if (index === nums.length) {
            result.push([...current]);
            return;
        }
        current.push(nums[index]);
        backtrack(index + 1, current);

        current.pop()

        backtrack(index + 1, current);

    }
    backtrack(0, []);
    return result;
};