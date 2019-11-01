var sync = require('./public/sync.js')


sync.fiber(function()
{
    try 
    {
        // q1();
        // q2();
        // q3();
        // q5();
        // q6();
        // b2();
        console.log("end");
    } catch(e) {
        console.log(e);
    } 
})


function b3() {
    obj = {
        "a": "test1",
        "b": "test2",
        "c": "test3"
    };
    prop = 'test2';
    for( var key in obj ) {
        if (obj[key] == prop) {
            delete obj[key]
        }
    }
    console.log();
}


function b2() {
    var location = 2;
    var priorities = [2, 1, 3, 2, 4, 1, -1, 0];
    var num, num2;
    var limit = priorities.length, cnt = 0;
    var tmpArr = [];
    for (var i=0; i<limit; i++) {
        tmpArr.push(0);
    }
    tmpArr[location] = 1;
    for (let i=0; i<limit; i++) {
        // if (++cnt == limit) break;
        num = priorities.splice(i,1)[0];
        num2 = tmpArr.splice(i,1)[0];
        var isBig = priorities.slice(i,limit).find(function(a){
            return a>num;
        });
        if (typeof isBig != "undefined") {
            priorities.push(num);
            tmpArr.push(num2);
            tmpArr
            i--;
        }
        else {
            priorities.splice(i,0,num);
            tmpArr.splice(i,0, num2);
        }
    }
    answer = tmpArr.indexOf(1);
    console.log(priorities);
    console.log(tmpArr);
    console.log(answer);
}

function b1() {
    var answer = 0;
    var skill = "CBD"
    var skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];

    var j=0;
    var lastIdx = -1;
    for (var i=0; i<skill_trees.length; i++) {
        lastIdx = -1;
        var tmpArr = new Array(skill_trees[i].length);
        for (j=0; j<skill.length; j++) {
            var idx = skill_trees[i].indexOf(skill[j]);
            tmpArr[j] = idx;
        }
        for (var k=0; k<tmpArr.length; k++) {
            
        }
        
    }
    console.log(answer);
}

function qq4() {
    var n = 78;
    var answer;
    var compare = count(n);
    for (let i=n+1; ; i++) {
        if (compare == count(i)) {
            answer = i;
            break;
        }
    }
    console.log(answer);
}

function count(n) {
    var i;
    for(i=0;n!=0;i++) {
        n&=(n-1);
    }
    return i;
}


function qq3_1() {
    
    var n = 9;
    var lost = [2, 4, 7, 8];
    var reserve = [3, 6, 9];

    var aa = n - lost.filter(a => {
        const b = reserve.find(r => Math.abs(r-a) <= 1)
        if(!b) return true
        reserve = reserve.filter(r => r !== b)
    }).length

    console.log(aa);
}

function qq3() {
    var n = 9;
    // var lost = [2, 4];
    var lost = [2, 4, 7, 8];
    // var reserve = [1, 3, 5];
    var reserve = [3, 6, 9];
    
    var answer = 0;
    var rstCnt = 0;
    var lostObj = lost.reduce(function(acc, cur) {
        acc[cur] = cur;
        return acc;
    }, {});
    var obj_ = reserve.reduce(function(acc, cur) {
        if (typeof acc[cur] != "undefined") {
            var tmpCnt = acc[cur];
            acc[cur] = ++tmpCnt;
        } else {
            acc[cur] = 1;
        }
        return acc;
    }, {});

    for (var i=0; i<lost.length; i++) {
        if (typeof obj_[lost[i]] != "undefined") {
            var tmpCnt = obj_[lost[i]];
            obj_[lost[i]] = (tmpCnt-1);
            delete lostObj[lost[i]];
        }
    }

    for (let i=1; i<=n; i++) {
        if (typeof lostObj[i] != "undefined") {
            if (i>0 && typeof obj_[i-1] != "undefined" && obj_[i-1] != 0) {
                rstCnt = obj_[i-1];
                obj_[i-1] = (rstCnt-1);
                delete lostObj[i];
                answer++;
                continue;
            }
            else if (i<n && typeof obj_[i+1] != "undefined" && obj_[i+1] != 0) {
                rstCnt = obj_[i+1];
                obj_[i+1] = (rstCnt-1);
                delete lostObj[i];
                answer++;
                continue;
            }
        }
        else {
            answer++;
        }
    }
    console.log(answer);

}

function qq2() {
    answer = [];
    var height = [6,9,5,7,4];
    
    for (let i=height.length-1; i>=0; i--) {
        for(let j=i-1; j>=0; j--) {
            if (height[i] < height[j]) {
                answer.unshift((j+1));
                break;
            } 
        }
        if (height.length-i !=answer.length) answer.unshift(0);
    }

    console.log(answer);
}

function qq1_1() {
    var participant = ["mislav", "stanko", "mislav", "ana"];
    var completion = ["stanko", "ana", "mislav"]; 

    var dic = completion.reduce((obj, t)=> (obj[t]= obj[t] ? obj[t]+1 : 1 , obj) ,{});
    var answer =  participant.find(t=> {
        if(dic[t])
            dic[t] = dic[t]-1;
        else 
            return true;
    });
    console.log(answer);
}
function qq1() {

    var participant = ["mislav", "stanko", "mislav", "ana"];
    var completion = ["stanko", "ana", "mislav"]; 
    // var participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
    // var completion = ["josipa", "filipa", "marina", "nikola"];

    var answer = "";
    var obj_ = participant.reduce(function(acc, cur) {
        if (typeof acc[cur] != "undefined") {
            var tmpCnt = acc[cur];
            acc[cur] = ++tmpCnt;
        } else {
            acc[cur] = 1;
        }
        return acc;
    }, {});
     
}











function q1() {
    try 
    {
        var n = 5;
        var arr1 = [9, 20, 28, 18, 11];
        var arr2 = [30, 1, 21, 17, 28];
        var rstArr = [];
        for (var i=0; i<n; i++) {
            var bin1 = arr1[i].toString(2);
            var bin2 = arr2[i].toString(2);
            var rst = arr1[i] | arr2[i];
            var rstVal = rst.toString(2).split("1").join("#").split("0").join(" ");
            rstArr.push(rstVal);
        }
        for (var i=0; i<n; i++) {
            console.log(rstArr[i]);
        }
    } catch(e) {
        console.log(e);
    } 
    
}

function q2() {
    try 
    { 
        var input1 = ["1S2D*3T", "1D2S#10S", "1D2S0T", "1S*2T*3S", "1D#2S*3S", "1T2D3D#", "1D2S3T*"]; 
        var answer = [];
        for (var i=0; i<input1.length; i++) {
            var inputVal = input1[i];
            var isFirst = true;
            var sumVal = 0;
            var rstArr = [];
            for (var j=0; j<inputVal.length; j++) {
                if (!isNaN( inputVal[j] )) {
                    if (isFirst) {
                        isFirst = false;
                        sumVal = 0;
                    }
                    sumVal = parseInt(sumVal +"" + inputVal[j]);
                } else {
                    isFirst = true;
                    rstArr = ( getSDT(inputVal[j], sumVal, rstArr));
                    console.log();
                }
            }
            answer.push(rstArr[0] + rstArr[1] + rstArr[2]);
        }
        for (var i=0; i<input1.length; i++) {
            console.log(answer[i]);
        }
    } catch(e) {
        console.log(e);
    } 
}

function getSDT(inputPar, rst, rArr) {
    switch (inputPar) {
        case "S" :
            rArr.push(rst);
            // var a = rArr.slice()
            return rArr.slice();
            break;
        case "D" :
            rArr.push(rst*rst);
            return rArr.slice();
            break;
        case "T" :
            rArr.push(rst*rst*rst);
            return rArr.slice();
            break;
        case "*" :
            if (rArr.length == 0) {
                rArr[rArr.length-1] = rArr[rArr.length-1] *2;
                return rArr.slice();
            }
            else {
                rArr[rArr.length-2] = rArr[rArr.length-2] *2;
                rArr[rArr.length-1] = rArr[rArr.length-1] *2;
                return rArr.slice();
            }
            break;
        case "#" :
            rArr[rArr.length-1] = rArr[rArr.length-1] *-1;
            return rArr.slice();
            break;
        default :
            return rArr.slice();
    }
}

function q3() {
    var n = 3
    var c = [3, 3, 2, 5, 2, 0]
    // var inputArr = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"];
    var inputArr = ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Jeju", "Seoul", "Jeju", "Pangyo", "Seoul"];
    var heapArr = new Array(n);
    var returnTime = 0;
    for (; inputArr.length >= 1; ) {
        var compareVal = inputArr[0];
        inputArr = inputArr.slice(1, inputArr.length);
        var varIndex = heapArr.indexOf(compareVal)
        if (varIndex != -1) {
            returnTime += 1;
            heapArr.splice(varIndex, 1);
            heapArr.push(compareVal);
        } else {
            returnTime += 5;
            if (heapArr.length>0){
                heapArr.splice(0, 1);
                heapArr.push(compareVal);
            }
        }
    }
    console.log(returnTime);
}

function q4() {

}

function q5() {
    var arr1 = ["FRANCE", "handshake", "aa1+aa2", "E=M*C^2"];
    var arr2 = ["french", "shake hands", "AAAA12", "e=m*c^2"];

    var regType = /^[a-z]*$/; 
    for (var i=0; i<arr1.length; i++) {
        var str1 = arr1[i].toLowerCase();
        var str2 = arr2[i].toLowerCase();
        var kyoCnt = 0;
        var t_arr1 = [];
        var t_arr2 = [];
        
        for (j=0; j<str1.length-1; j++) {
            var tmp = str1.substring(j,j+2);
            if (regType.test(tmp)) {
                t_arr1.push(tmp);
            }
        }

        for (j=0; j<str2.length-1; j++) {
            var tmp = str2.substring(j,j+2);
            if (regType.test(tmp)) {
                
                t_arr2.push(tmp);
            }
        }
        var kyoArr = (t_arr1.length < t_arr2.length? t_arr1: t_arr2);
        var kyoArr2 = (t_arr1.length < t_arr2.length? t_arr2: t_arr1);
        for (var j=0; j<kyoArr.length; j++) {
            if (kyoArr2.indexOf(kyoArr[j]) > -1) {
                kyoCnt++;
            }
        }

        var rst1 = (kyoCnt / (t_arr1.length + t_arr2.length - kyoCnt));
        if (t_arr1.length == 0 && t_arr2.length == 0) {
            rst1 = 1;
        } 
        rst2 = Math.floor(rst1 * 65536) ;
        console.log(rst2);
    }
    console.log();

}


 
function q6() {

    var m = 4;
    var n = 5;
    var arr1 = ["CCBDE", "AAADE", "AAABF", "CCBBF"]
    
    var indexArr = [];
    var initStr = "";
    for (var i=0; i<n; i++) {
        initStr += "O";
    }
    for (var i=0; i<m; i++) {
        indexArr.push(initStr);
    }

    var count = 0;

    while (true) {
        var isContinue = false;
        for (var j=0; j<n-1; j++) {
            for (var i=m-1; i>0; i--) {
                var compareStr = arr1[i][j];

                if (indexArr[i][j] == "N") continue;

                var a1 = chkVertical(indexArr, i, j, "F");
                if (a1 == -1) continue;

                if (compareStr == arr1[a1][j]) {

                    var b1 = chkVertical(indexArr, i, j+1, "S");
                    if (b1 == -1) continue;

                    if (compareStr == arr1[b1][j+1]) {
                        var b2 = chkVertical(indexArr, b1, j+1, "F");
                        if (b2 == -1) continue;

                        if (compareStr == arr1[b2][j+1]) {
                            isContinue = true;
                            indexArr[i] = setCharAt(indexArr[i], j, "X");
                            indexArr[a1] = setCharAt(indexArr[a1], j, "X");
                            indexArr[b1] = setCharAt(indexArr[b1], j+1, "X");
                            indexArr[b2] = setCharAt(indexArr[b2], j+1, "X");
                        }
                    }
                }
            }
        }
        count += countFnc(indexArr);
        if (!isContinue) break;
    }
    
    console.log(count);
    
}

function setCharAt(str, index, target) {
    str = str.split('');
    str[index] = target;
    str = str.join('');
    return str;
}

function countFnc(inputA) {
    var cnt = 0;
    for (var i=0; i<inputA.length; i++) {
        for (var j=0; j<inputA[i].length; j++) {
            if (inputA[i][j] == "X"){
                cnt++;
                inputA[i] = setCharAt(inputA[i], j, "N");
            } 
        }
    }
    return cnt;
}

function chkVertical(inputArr, index, indexJ, chk) {
    var tmp = -1;
    for (var qq=index; qq>0; qq--) {
        var tmpIndex = -1;
        if (chk == "F") tmpIndex = qq-1;
        else tmpIndex = qq;
        if (inputArr[tmpIndex][indexJ] =="N") continue;
        else {
            tmp = tmpIndex;
            break;
        }
    }
    return tmp;
}

