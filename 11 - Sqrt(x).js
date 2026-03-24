// Given a non-negative integer x, return the square root of x rounded down
// to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 1;
  let right = x;
  while (left <= right) {
    let med = Math.floor((left + right) / 2);
    let med_squared = med * med;
    if (med_squared === x) {
      return med;
    } else if (med_squared < x) {
      left = med + 1;
    } else {
      right = med - 1;
    }
  }
  return right;
};
