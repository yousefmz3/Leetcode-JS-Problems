/**
 * @param {number} n
 * @return {number}
 */
var clumsy = function (n) {
    let stack = [n];
    n--;

    let i = 0;
    while (n > 0) {
        if (i % 4 === 0) {
            stack.push(stack.pop() * n);
        } else if (i % 4 === 1) {
            stack.push(Math.trunc(stack.pop() / n));
        } else if (i % 4 === 2) {
            stack.push(n);
        } else {
            stack.push(-n);
        }
        i++;
        n--;
    }
    return stack.reduce((a, b) => a + b, 0);
};