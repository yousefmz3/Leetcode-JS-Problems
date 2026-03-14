// Given the head of a singly linked list and an integer k, split the 
// linked list into k consecutive linked list parts.

// The length of each part should be as equal as possible: no two 
// parts should have a size differing by more than one. This may lead to some parts being null.

// The parts should be in the order of occurrence in the input list, 
// and parts occurring earlier should always have a size greater than or equal to parts occurring later.

// Return an array of the k parts.


// Example 1:


// Input: head = [1,2,3], k = 5
// Output: [[1],[2],[3],[],[]]
// Explanation:
// The first element output[0] has output[0].val = 1, output[0].next = null.
// The last element output[4] is null, but its string representation as a ListNode is [].

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {

    let n = 0;
    let current = head;

    while (current) {
        n++;
        current = current.next;
    };

    let size = Math.floor(n / k); 
    let added = n % k;

    const result = []
    current = head;

    for (let i = 0; i < k; i++) {
        let partSize = size + (added > i ? 1 : 0);

        if (partSize === 0) {
            result[i] = null;
            continue;
        };
        result.push(current);

        for (let j = 1; j < partSize && current != null; j++) {
            current = current.next;
        }

        let next = current ? current.next : null;
        if (current) current.next = null; 
        current = next;
    }

    return result;

};