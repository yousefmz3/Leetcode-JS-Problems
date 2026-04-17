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

// console.log(permute([1,4,5,6]))
// num of solutions = 4 * 3 * 2 * 1 = 24 

// [
//   [ 1, 4, 5, 6 ], [ 1, 4, 6, 5 ],
//   [ 1, 5, 4, 6 ], [ 1, 5, 6, 4 ],
//   [ 1, 6, 4, 5 ], [ 1, 6, 5, 4 ],
//   [ 4, 1, 5, 6 ], [ 4, 1, 6, 5 ],
//   [ 4, 5, 1, 6 ], [ 4, 5, 6, 1 ],
//   [ 4, 6, 1, 5 ], [ 4, 6, 5, 1 ],
//   [ 5, 1, 4, 6 ], [ 5, 1, 6, 4 ],
//   [ 5, 4, 1, 6 ], [ 5, 4, 6, 1 ],
//   [ 5, 6, 1, 4 ], [ 5, 6, 4, 1 ],
//   [ 6, 1, 4, 5 ], [ 6, 1, 5, 4 ],
//   [ 6, 4, 1, 5 ], [ 6, 4, 5, 1 ],
//   [ 6, 5, 1, 4 ], [ 6, 5, 4, 1 ]
// ]