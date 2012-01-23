var max_l = 0,
    max_n=0,
    c,
    l_map = {
        1:1,
        2:2
    };

function getNext(n){ return (n%2===0)?n/2:3*n+1; }


function getLen(x){
    if(l_map[x]) return l_map[x];
    var next = getNext(x);
    if(x>max_n){
        console.log('max_n',x);
        max_n = x;
    }
    l_map[x] = 1+getLen(next);
    return l_map[x];
}

for(var i=1;i<1000000;i++){
    c=getLen(i);
    if(c>max_l){
        console.log('max_l',i,c);
        max_l = c;
    }
}
console.log(l_map);
