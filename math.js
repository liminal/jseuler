/**
 * Math helper library
 */

function _max(a,b)  { return (a>b)?a:b; }
function _min(a,b)  { return (a<b)?a:b; }
function _sum(a,b)  { return a+b; }
function _prod(a,b) { return a*b; }

var ap = Array.prototype;

ap.last = function() { return this[this.length -1]; };
ap.max  = function() { return this.reduce(_max,0); };
ap.min  = function() { return this.reduce(_min,0); };
ap.sum  = function() { return this.reduce(_sum,0); };
ap.prod = function() { return this.reduce(_prod,1); };

//console.log([1,4,2,3].prod());

/**
 * helper functions
 */
exports.sum = _sum;
exports.product = _prod;

// find the least factor in n by trial division
function leastFactor(n) {
    if (isNaN(n) || !isFinite(n)) return NaN;  
    if (n===0) return 0;  
    if (n%1 || n*n<2) return 1;
    if (n%2===0) return 2;  
    if (n%3===0) return 3;  
    if (n%5===0) return 5;  
    var m = Math.sqrt(n);
    for (var i=7;i<=m;i+=30) {
        if (n%i===0)      return i;
        if (n%(i+4)===0)  return i+4;
        if (n%(i+6)===0)  return i+6;
        if (n%(i+10)===0) return i+10;
        if (n%(i+12)===0) return i+12;
        if (n%(i+16)===0) return i+16;
        if (n%(i+22)===0) return i+22;
        if (n%(i+24)===0) return i+24;
    }
    return n;
}

function factor(n) {
    if (isNaN(n) || !isFinite(n) || n%1!==0 || n===0) return [n];
    if (n<0) return [-1].concat(factor(-n));
    var minFactor = leastFactor(n);
    if (n==minFactor) return [n];
    return [minFactor].concat(factor(n/minFactor));
}

exports.factor = factor;

//console.log(factor(123412341534532));

var primes = [2,3,5,7,11,13];

function isPrime(x){
    return leastFactor(x) === x;
}

function fill_primes_while(fn){
    if(fn()){
        var a = primes.last();
        while(fn()){
            if(isPrime(a)){ primes.push(a); }
            a +=2;
        }
    }
}


function first_n_primes(n){
    fill_primes_while(function(){ return (n > primes.length);});
    return primes.slice(0,n);
}

exports.first_n_primes = first_n_primes;

//console.log(first_n_primes(10));
//console.log(primes_below(100));
