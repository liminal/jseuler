/**
 * problem 6
 */
//[11,12,13,14,15,16,17,18,19,20]

var sum = function(a,b) {return a+b;}
var prod = function(a,b) {return a*b;}

var s_sq=0, s = 0;

for(var i=1;i<=100;i++){
    s_sq += i*i;
    s += i;
}

s = s*s;

console.log(s,s_sq,s - s_sq);
