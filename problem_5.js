/**
 * Problem 5
 */
//[11,12,13,14,15,16,17,18,19,20]

var sum = function(a,b) {return a+b;}
var prod = function(a,b) {return a*b;}

var x = [2,2,2,2,3,3,5,7,11,13,17,19];

console.log(x.reduce(prod));
