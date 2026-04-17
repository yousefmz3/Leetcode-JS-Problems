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

// console.log(subsets([1,4,5,6]))
// num of solutions = 2^(4) = 16 

// [
//   [ 1, 4, 5, 6 ], [ 1, 4, 5 ],
//   [ 1, 4, 6 ],    [ 1, 4 ],
//   [ 1, 5, 6 ],    [ 1, 5 ],
//   [ 1, 6 ],       [ 1 ],
//   [ 4, 5, 6 ],    [ 4, 5 ],
//   [ 4, 6 ],       [ 4 ],
//   [ 5, 6 ],       [ 5 ],
//   [ 6 ],          []
// ]
