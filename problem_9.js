/**
 * Problem 9
 * A Pythagorean triplet is a set of three natural numbers, a  b  c, for which,
 *
 * a2 + b2 = c2
 * For example, 32 + 42 = 9 + 16 = 25 = 52.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

function isPythagorean(a,b,c){
    return (a*a+b*b === c*c);
}

var i,j,k;
for(i=1;i<=1000;i++){
    for(j=1;j<=1000-i;j++){
        k = 1000-(i+j);
        if(isPythagorean(i,j,k)){
            console.log(i,j,k,i*j*k);
        }
    }
}
