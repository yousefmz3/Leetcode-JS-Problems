// Given an integer n, return the decimal value of
// the binary string formed by concatenating the binary
// representations of 1 to n in order, modulo 10e9 + 7.

/**
 * @param {number} n
 * @return {number}
 */
// solution 1
var concatenatedBinary = function (n) {
  const MOD = 1e9 + 7; // => is used for modulo operations to prevent overflow and ensure the result fits within standard integer limits.
  let result = 0;

  for (let i = 1; i <= n; i++) {
    let length = Math.floor(Math.log2(i)) + 1; // => finds how many bits are needed to represent the number i in binary | for example, for i = 5 (binary 101), length would be 3.
    result = (result * 2 ** length + i) % MOD; // => ( result * 2 ** length ) shifts the current result to the left by the number of bits in i.
  }
  return result;
};

// solution 2 (uses bit operations, which are faster than string concatenation and parsing).
var concatenatedBinary = function (n) {
  const MOD = 1000000007n; // => using BigInt for large numbers to prevent overflow.
  let res = 0n;
  let bits = 0n;

  for (let i = 1n; i <= BigInt(n); i++) {
    if ((i & (i - 1n)) === 0n) bits++; // => true only for powers of two.
    res = ((res << bits) | i) % MOD; // => (res << bits) shifts the current result to the left by the number of bits needed for i, and (| i) adds i to the result.
  }

  return Number(res);
};
