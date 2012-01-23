/**
 * Problem 4
 */
function isPalindrome(x){
    return String(x) === String(x).split('').reverse().join('');
}

var max = 0;
for(var a=999;a>100;a--){
    for(var b=999;b>100;b--){
        if(isPalindrome(a*b) && a*b > max) {
            max = a*b;
        }
    }
}
console.log(max);
