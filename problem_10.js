/**
 * Problem 10
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 */

var m = require('./math'),
    f = require('./find_primes');

var start = Date.now();
console.log('start');
console.log(f.find_primes(2000000).sum());
var end = Date.now();

console.log('end', end - start);
