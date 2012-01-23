/**
 * problem 7
 *
 * By listing the first six prime numbers: 
 * 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 */

var primes = [2,3,5,7,11,13];

function isPrime(x){
    for(var i=0;i<primes.length;i++){
        if(x%primes[i] ===0){
            return false;
        }
    }
    return true;
}

var a = 17;

while(primes.length <= 10001){
    if(isPrime(a)){
        primes.push(a);
    }
    a +=2;
}

console.log(primes[10000]);
