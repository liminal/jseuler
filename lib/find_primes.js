
exports.find_primes = function(max_prime) {
    var sqrtlim = Math.sqrt(parseFloat(max_prime));
    var pp = 2;
    var ss = [pp];
    var ep = [pp];
    pp++;
    var rss = [(ss[0])];
    var tp = [pp];
    var i = 0;
    rss.push(((rss[i]) * (tp[0])));
    var xp = [];
    pp += ss[0];
    var npp = pp;
    tp.push(npp);

    while(npp < max_prime) {
        i++;
        while(npp < ((rss[i]) + 1)) {
            for(var n in ss) {
                if(!ss.hasOwnProperty(n)) continue;
                npp = pp + ss[n];
                if (npp > max_prime) break;
                if (npp <= ((rss[i]) + 1)) {
                    pp = npp;
                }
                var sqrtnpp = Math.sqrt(npp);
                var test = true;
                for(var q in tp) {
                    if (sqrtnpp < tp[q]) break;
                    else if (npp % tp[q] === 0) {
                        test = false;
                        break;
                    }
                }
                if (test === true) {
                    if (npp <= sqrtlim) tp.push(npp);
                    else xp.push(npp);
                }
            }
            if (npp > max_prime) break;
        }
        if (npp > max_prime) break;
        var lrpp = pp;
        var nss = [];
        while(pp < ((((rss[i]) + 1) * 2) - 1)) {
            for(var n in ss) {
                if(!ss.hasOwnProperty(n)) continue;
                npp = pp + ss[n];
                if (npp > max_prime) break;
                var sqrtnpp = Math.sqrt(npp);
                var test = true;
                for(var q in tp) {
                    if (sqrtnpp < tp[q]) break;
                    else if (npp % tp[q] == 0) {
                        test = false;
                        break;
                    }
                }
                if (test == true) {
                    if (npp <= sqrtlim) tp.push(npp);
                    else xp.push(npp);
                }
                if (npp % tp[0] != 0) {
                    nss.push((npp - lrpp));
                    lrpp = npp;
                }
                pp = npp;
            }
            if (npp > max_prime) break;
        }
        if (npp > max_prime) break;
        ss = nss;
        ep.push(tp[0]);
        tp.splice(0, 1);
        rss.push(((rss[i]) * (tp[0])));
        npp = lrpp;
    }
    ep.reverse();
    for(var n in ep) { 
        if(ep.hasOwnProperty(n)){ 
            tp.unshift(ep[n]); 
        }
    }
    tp.reverse();
    for(var n in tp) {
        if(tp.hasOwnProperty(n)){ 
            xp.unshift(tp[n]);
        }
    }
    return xp;
};

