//dp

mainP();

function mainP() {
    dp2_1([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]);
}
function dp2_1(triangle) {
    let answer = 0;

    let tmpArr = Array(triangle.length); 
    for (let i=0; i<triangle.length; i++) {
        tmpArr[i] = triangle[i].slice();
        for (let j=0; j<triangle[i].length; j++){
            tmpArr[i][j] = false;
        }
    }
    tmpArr[0][0] = triangle[0][0];
    let limit = triangle.length;

    for (let i=1; i<limit; i++) {
        tmpArr[i][0] = tmpArr[i - 1][0] + triangle[i][0]; 
        tmpArr[i][i] = tmpArr[i - 1][i - 1] + triangle[i][i];
    }
    for (let i=2; i<limit; i++) {
        for (let j=1; j<i; j++){
            tmpArr[i][j] = Math.max(tmpArr[i - 1][j - 1], tmpArr[i - 1][j]) + triangle[i][j];
        }
    }

    answer = Math.max.apply(null, tmpArr[limit-1]);

    return answer;
}
function dp2(triangle) {
    let answer = 0;
    let tmpArr = Array(triangle.length); 
    for (let i=0; i<triangle.length; i++) {
        tmpArr[i] = triangle[i].slice();
        for (let j=0; j<triangle[i].length; j++){
            tmpArr[i][j] = false;
        }
    }
    let maxVal = tmpArr[0][0] = triangle[0][0];
    let limit = triangle.length;
    dfs3(0, 1);

    function dfs3(idx, depth) {
        if (limit == depth) return;
        for (let i=idx; i<idx+2; i++) {
            let compare = tmpArr[depth-1][idx] + triangle[depth][i];
            if (tmpArr[depth][i] != false && tmpArr[depth][i] > compare) continue;
            tmpArr[depth][i] = compare;
            if (compare > maxVal) maxVal = compare;
            dfs3(i, depth+1);
        }
        
    }
    answer = maxVal;
    return answer;
}

function dp1() {
    var p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
    function cutRod(p, n) {
        var r = [0];
        for (var j = 1; j <= n; j++) {
            q = -1;
            for (var i = 1; i <= j; i++) {
                q = Math.max(q, p[i] + r[j - i]);
            }
            r[j] = q;
        }
        return r[n];
    }
    cutRod(p, 2); // 5
    cutRod(p, 3); // 8
    cutRod(p, 4); // 10
    cutRod(p, 7); // 18
}




//dfs, bfs 네트워크

var aa = solution2(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]);
console.log(aa);

function solution2(limit, computers) {
    let answer = 0;

    let chkArr = Array(limit);
    let tmpArr = Array(limit);
    for (let i=0; i<limit; i++) tmpArr[i]=false;
    for (let i=0; i<limit; i++) chkArr[i]=tmpArr.slice();
    // console.log(chkArr);
    for (let i=0; i<limit; i++) {
        if (!chkArr[i][i]) {
            answer++;
            dfs2(limit, computers, i)
        }
    }
    return answer;

    function dfs2(limit, computers, de) {
        for (let i=0; i<limit; i++) {
            if(computers[de][i] == 1 && !chkArr[de][i]) {
                chkArr[de][i] = chkArr[i][de] = true;
                dfs2(limit, computers, i);
            }
        }
    }
}




//dfs, bfs 타겟넘버

// var answer = 0;
// var aa = solution([1, 1, 1, 1, 1], 3);
// console.log(aa);

function solution(numbers, target) {
    // var answer = 0;
    dfs(numbers, target, 0)
    return answer;
}

function dfs(numbers, target, de) {
    if (numbers.length == de) {
        let sum = numbers.reduce((acc, cur, i) => {
            return acc+cur;
        })
        if (sum == target) 
            answer++;
        return;
    }
    else {
        numbers[de]*=1;
        dfs(numbers, target, de+1);
        numbers[de]*=-1;
        dfs(numbers, target, de+1);
    }
}