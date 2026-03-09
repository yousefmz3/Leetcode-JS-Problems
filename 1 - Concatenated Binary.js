// Given an integer n, return the decimal value of 
// the binary string formed by concatenating the binary 
// representations of 1 to n in order, modulo 109 + 7.

 /**
 * @param {number} n
 * @return {number}
 */
// solustion 1
var concatenatedBinary = function(n) {
    const MOD = 1e9 + 7 ;
    let result = 0;

    for(let i = 1 ; i <= n ; i++){
        let length = Math.floor(Math.log2(i)) + 1;
        result = (result * ( 2 ** length ) + i ) % MOD;
    }
    return result ;
};

// solustion 2
var concatenatedBinary = function(n) {
    const MOD = 1000000007n;
    let res = 0n;
    let bits = 0n;

    for(let i=1n; i<=BigInt(n); i++){
        if((i & (i-1n)) === 0n) bits++;
        res = ((res<<bits) | i) % MOD;
    }

    return Number(res);
};