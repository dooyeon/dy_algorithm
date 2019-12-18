mainP();

function mainP() {
    // dp1(3,3,2);
    dp2_2(12);
    // dp3([10, 40, 30, 20], 20);
}

function dp3(numbers, K) {
    var answer = 0;
    let limit = numbers.length
    let chkArr = Array(limit);
    let tmpArr = Array(limit);
    for (let i=0; i<limit; i++) tmpArr[i]=false;
    for (let i=0; i<limit; i++) chkArr[i]=tmpArr.slice();




    for (let i=0; i<limit; i++) {
    }

    return answer;

    function dfs3_1(arrT, K, idx, cnt, depth) {

        if (depth==cnt)

        for (let i=0; i<aaa.length; i++) {
            if (idx===i) continue;
            if (aaa[i]) continue;
        }
        for (let i=aaa.length-1; i>idx; i--) {
            
        }
    }
}
    








function dp2_2(b) {
    var answer = 0;
    var rstArr = [];
    var point = 500000;
    for (a=1; a<=b; a++) {
        for (var c=b; c<=point; c++) {
            if (a+b<c) break;
            if (a*a + b*b == c*c) {
                point = c;
                rstArr.push(c);
            }
        }
    }
    answer = (rstArr.length==0?-1:Math.min.apply(null, rstArr));

    return answer;
}
function dp2_1(b) {
    var answer = 0;
    var rstArr = [];
    var point = 500001;
    var a = b-1;
    for (a; a>0; a-=2) {
        let tmpRst = dp2_dfs(a,b,b);
        if (tmpRst!=-1){
            point = tmpRst;
            rstArr.push(tmpRst);
        }
    }
    
    answer = (rstArr.length==0?-1:Math.min.apply(null, rstArr));

    return answer;

    function dp2_dfs(a,b) {
        for (var c=b; c<=500000; c++) {
            if (point<=c) return -1;
            if (a*a + b*b == c*c) return c;
        }
        return -1;
    }
}
function dp2_dfs2(a,b,c) {
    if (c>500000) {
        return -1;
    } 
    if (point<=c) return  -1;
    if (a*a + b*b == c*c) return c;
    dp2_dfs2(a,b,++c);
}
function dp2_dfs1(a,b) {
    for (var c=b; c<=500000; c++) {
        if (a*a + b*b == c*c) return c;
    }
    return -1;
}

function dp2(b) {
    var answer = 0;
    for (var a=b; a>0; a--) {
      for (var c=b; c<=500000; c++) {
          if (a*a + b*b == c*c) break;
      }
      if (a*a + b*b == c*c) break;
    }
    answer = c;

    return answer;
}

function dp1(n,m,k) {
    let answer = 0;

    let dp = Array(n);
    for (let i=0; i<n; i++) dp[i]=0;
    dp[0]++;
    let idx = 0;
    while(dp[idx] < m) {
        idx = idxFnc(idx, n, (dp[idx]%2==0?k:-k));
        answer++;
        dp[idx]++;
    }

    return answer;
}
function idxFnc(idx, n, k) {
    let tmpSum = idx+k;
    if (tmpSum<0) {
        return n+tmpSum;
    } else {
        return (tmpSum)%n
    }
}