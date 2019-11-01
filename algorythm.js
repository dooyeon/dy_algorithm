/*
function main() {
    while(true)
	{
        var line = '';
		try {
            line = readline().split(' ')
		}
		catch
		{
			break;
        }
        let n1 = parseInt(line[0]), n2 = parseInt(line[1]);
        let s = n1 < n2 ? n1 : n2 ;
        let e = n1 < n2 ? n2 : n1 ;
        let max =0;
        for (let k=s; e>=k; k++) {
            let cnt=1, compareVal = k;
            
            while(compareVal!=1){
                cnt++;
                if(compareVal%2!=0){
                    compareVal = compareVal*3+1; 
                } else {    
                    compareVal /= 2;
                }
            }

            if(cnt > max){
                max = cnt;
            }
        }
	    print(n1 + " " + n2 + " " + max );
    }
}
main();
*/

/* 
function test1() {
    while(true)
	{
        let line = '';
		try {
            line = readline();
		}
		catch
		{
			break;
        }
        let n1 = parseInt(line)
	    print(n1 + " " + n2 + " " + max );
    }
}
 */

/* 
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
[Javascript] 사전식 배열
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
*/
test6();
function test6() {
    let inputArr = ["cba"]
    let inputVal = "";
    for(let key in inputArr ) 
	{
		try {
            inputVal = inputArr[key];
            if (typeof inputVal === "undefined") break;
		}
		catch
		{
			break;
        }
    } 
    // let tmpVal = inputVal.split('');//.sort().reserve().join('');
    let tmpVal = inputVal.split('').sort().join('');
    for (let i=0; i<tmpVal.length; i++) {
        for (let j=i+1; j<tmpVal.length-1; j++) {
            if (tmpVal[i]<tmpVal[j]) {
                let tmp = tmpVal[j];
                tmpVal.replaceAt(j, tmpVal[i]);
                tmpVal.replaceAt(i, tmp);
            }
        }
        if (inputVal == tmpVal) 
            console.log(tmpVal + ": " + i);
    }


    console.log(tmpVal);
}
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}
/* 
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
[Javascript] 피타고라스 서로소
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
*/
function test5() {
    let limit = 0;

    while(true)
	{
		try {
            limit = parseInt(readline());
		}
		catch
		{
			break;
        }
    }

    let cnt = 0;
    let rstArr = Array(limit);
    for (let i=1; i<=limit; i++) {
        for (let j=1; j<=limit; j++) {
            for (let k=1; k<=limit; k++) {
                if ( ((i<j)&&(j<k)) && (i*i+j*j == k*k)) {
                    rstArr[i] = 1;
                    rstArr[j] = 1;
                    rstArr[k] = 1;
                    if (getGCD(getGCD(i,j), k) == 1) {
                        cnt++;
                    }
                }
            }
        }
    }
    let notUsedCnt = rstArr.filter(val=> val==1);

    print(cnt + " " + (rstArr.length-1-notUsedCnt.length));
}

function getGCD(m, n) { 
    if(n == 0) return m; 
    else return getGCD(n, m%n); 
}


function test5_1() {
    let inputArr = ["10"]
    let limit = 0;
 
    console.log(typeof aaa);
    console.log(typeof aaa === "undefined");
    for(let key in inputArr ) 
	{
		try {
            limit = parseInt(inputArr[key]);
		}
		catch
		{
			break;
        }
    } 
    let cnt = 0;
    let rstArr = Array(limit);
    for (let i=1; i<=limit; i++) {
        for (let j=1; j<=limit; j++) {
            for (let k=1; k<=limit; k++) {
                if ( ((i<j)&&(j<k)) && (i*i+j*j == k*k)) {
                    rstArr[i] = 1;
                    rstArr[j] = 1;
                    rstArr[k] = 1;
                    if (getGCD(getGCD(i,j), k) == 1) {
                        cnt++;
                    }
                }
            }
        }
    }
    let notUsedCnt = rstArr.filter(val=> val==1);

    console.log(cnt + " " + (rstArr.length-1-notUsedCnt.length));
}



/* 
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
[Javascript] 배열 중복
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
*/
function test4() {
    let idx=0;

    let monitor_x = 0, monitor_y=0, programCnt=0;
    let programSize = Array();

    while(true)
	{
		try {
            if (idx == 0) {
                monitor_x = parseInt(readline().split(' ')[0]);
                monitor_y = parseInt(readline().split(' ')[1]);
            }
            else if (idx == 1) {
                programCnt = parseInt(readline());
            }
            else {
                let tmpArr = Array();
                let tmpSplit = readline().split(' ');
                //[x,y, width, height]
                for (let t=0; t<4; t++) {
                    tmpArr.push(parseInt(tmpSplit[t]));
                }
                programSize.push(tmpArr);
            }
            idx++;
		}
		catch
		{
			break;
        }
    }

    let monitor = Array(monitor_x);
    for (let i=0; i<monitor_x; i++) {
        monitor[i] = Array(monitor_y);
        for (let j=0; j<monitor_y; j++) {
            monitor[i][j] = 0;
        }
    }
    let total = monitor_x*monitor_y, cnt = 0;
    for(let key in programSize ) {
        let compareVal = programSize[key];
        let x=compareVal[0]-1;
        let y=compareVal[1]-1;
        let w=compareVal[2];
        let h=compareVal[3];
        for (let i=x; i<x+w; i++) {
            for (let j=y; j<y+h; j++) {
                if (monitor[i][j]==1) continue;
                else monitor[i][j] = 1, cnt++;
            }
        }
    }
    print(cnt + " " + (total-cnt));
}



function test4_1() {
    let inputArr = ["10 10", "3", "5 5 5 5", "3 3 1 1", "2 5 1 4"]
    let idx=0;

    let monitor_x = 0, monitor_y=0, programCnt=0;
    let programSize = Array();
    for(let key in inputArr ) 
	{
		try {
            if (idx == 0) {
                monitor_x = parseInt(inputArr[key].split(' ')[0]);
                monitor_y = parseInt(inputArr[key].split(' ')[1]);
            }
            else if (idx == 1) {
                programCnt = parseInt(inputArr[key]);
            }
            else {
                let tmpArr = Array();
                let tmpSplit = inputArr[key].split(' ');
                //[x,y, width, height]
                for (let t=0; t<4; t++) {
                    tmpArr.push(parseInt(tmpSplit[t]));
                }
                programSize.push(tmpArr);
            }
            idx++;
		}
		catch
		{
			break;
        }
    } 

    let monitor = Array(monitor_x);
    for (let i=0; i<monitor_x; i++) {
        monitor[i] = Array(monitor_y);
        for (let j=0; j<monitor_y; j++) {
            monitor[i][j] = 0;
        }
    }
    let total = monitor_x*monitor_y, cnt = 0;
    for(let key in programSize ) {
        let compareVal = programSize[key];
        let x=compareVal[0]-1;
        let y=compareVal[1]-1;
        let w=compareVal[2];
        let h=compareVal[3];
        for (let i=x; i<x+w; i++) {
            for (let j=y; j<y+h; j++) {
                if (monitor[i][j]==1) continue;
                else monitor[i][j] = 1, cnt++;
            }
        }
    }


    console.log(cnt + " " + (total-cnt));
}



 /* 
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
[Javascript] 배열 연속 최대값
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
*/
function test3() {
    var rstArr = [];
    var totalLength = 0, idx=0;

    while(true)
	{
		try {
            if (idx++ == 0) totalLength = parseInt(readline());
            else rstArr.push(parseInt(readline()))
		}
		catch
		{
			break;
        }
    }

    // var inputArr = [-4, 6, 0, -1, 0, 1, 7, -5, 3, -6, -2]
    var tmpArr = Array(totalLength)
    tmpArr[0] = rstArr[0];
    for (let i=1; i<totalLength; i++) { 
        tmpArr[i] = Math.max(rstArr[i], rstArr[i] + tmpArr[i-1]);
    }
    print(Math.max.apply(null, tmpArr));
}

function test3_1() {
    var inputArr = [11, -4, 6, 0, -1, 0, 1, 7, -5, 3, -6, -2]
    var rstArr = [];
    var totalLength = 0, idx=0;
    let rst = 0;
    for(let key in inputArr ) 
	{
        let line = '';
		try {
            if (idx++ == 0) totalLength = parseInt(inputArr[key]);
            else rstArr.push(parseInt(inputArr[key]))
		}
		catch
		{
			break;
        }

    }
    for (let i=0; i<totalLength; i++) {
        let sum = 0;
        for (let j=i; j<totalLength; j++) {
            sum += rstArr[j];
            rst = Math.max(rst, sum); 
        }
    }
    console.log(rst);
}

function test3_2() {
    var inputArr = [11, -4, 6, 0, -1, 0, 1, 7, -5, 3, -6, -2]
    var rstArr = [];
    var totalLength = 0, idx=0;
    let rst = 0;
    for(let key in inputArr ) 
	{
        let line = '';
		try {
            if (idx++ == 0) totalLength = parseInt(inputArr[key]);
            else rstArr.push(parseInt(inputArr[key]))
		}
		catch
		{
			break;
        }

    }
    // var inputArr = [-4, 6, 0, -1, 0, 1, 7, -5, 3, -6, -2]
    let sum = 0;
    for (let i=0; i<totalLength; i++) { 
        sum = Math.max(sum, 0) + rstArr[i];
        rst = Math.max(sum, rst);  
    }
    console.log(rst);
}

function test3_3() {
    var inputArr = [11, -4, 6, 0, -1, 0, 1, 7, -5, 3, -6, -2]
    var rstArr = [];
    var totalLength = 0, idx=0;
    for(let key in inputArr ) 
	{
        let line = '';
		try {
            if (idx++ == 0) totalLength = parseInt(inputArr[key]);
            else rstArr.push(parseInt(inputArr[key]))
		}
		catch
		{
			break;
        }

    }
    // var inputArr = [-4, 6, 0, -1, 0, 1, 7, -5, 3, -6, -2]
    var tmpArr = Array(totalLength)
    tmpArr[0] = rstArr[0];
    for (let i=1; i<totalLength; i++) { 
        tmpArr[i] = Math.max(rstArr[i], rstArr[i] + tmpArr[i-1]);
    }
    console.log(Math.max.apply(null, tmpArr));
}

 /* 
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
[Javascript] memo
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
*/
function test2() {
    while(true)
	{
        let line = '';
		try {
            line = readline();
		}
		catch
		{
			break;
        }
        var regExp = /([A-Za-z])\w+/g;  

        let remain = line.match(regExp).join("");
        var rstObj = {};
        for (let i=0; i<line.length; i++) {
            if (rstObj.hasOwnProperty(line[i]))
            {
                remain=remain.split(line[i]).join("");
            } else {
                rstObj[line[i]] = 1;
            }
        }
        if (remain.length==0) {
            print("-");
        } else if(remain.length==1){
            print(remain[0]);
        } else {
            print(remain[0] + " " + remain[remain.length-1]);
        }
    }
}

function test2_1() {
    var obj = {
        "0": "19280",
        "1": "43820",
        "2": "49880",
        "3": "11070"
    };

    for( let key in obj ) 
	{
        let line = '';
		try {
            line = obj[key];
		}
		catch
		{
			break;
        }
        let n1 = parseInt(line)

        let exchange = Array(50000, 10000, 5000, 1000, 500, 100, 50, 10);
        let cnt = 0;
        for (let i=0; i<exchange.length; i++) {
            let tempVal = n1;
            if (n1>exchange[i]) {
                n1 = n1%exchange[i];
                cnt += Math.floor(tempVal/exchange[i]);
            }
        }
        
	    console.log(cnt);
    }
}


function test2_2() {
    var obj = {
        "0": "pV#$#oFpdiTybq",
        "1": "a#a#$bb",
        "3": "a#ab^b&c",
        "4": "aabbcasdfvzvxcvxv$^sd@",
        "5": "aabb&%crARWAWQ$^$EsadaswqWESAD"
    };

    for( let key in obj ) 
	{
        let line = '';
		try {
            line = obj[key];
		}
		catch
		{
			break;
        }
        var regExp = /([A-Za-z])+/g;  

        let remain = line.match(regExp).join("");
        var rstObj = {};
        for (let i=0; i<line.length; i++) {
            if (rstObj.hasOwnProperty(line[i]))
            {
                remain=remain.split(line[i]).join("");
            } else {
                rstObj[line[i]] = 1;
            }
        }
        if (remain.length==0) {
            console.log("-");
        } else if(remain.length==1){
            console.log(remain[0]);
        } else {
            console.log(remain[0] + " " + remain[remain.length-1]);
        }
    }
}
/* 
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
[Javascript] 잔돈
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
*/
function test1() {
    while(true)
	{
        let line = '';
		try {
            line = readline();
		}
		catch
		{
			break;
        }
        let n1 = parseInt(line)

        let exchange = Array(50000, 10000, 5000, 1000, 500, 100, 50, 10);
        let cnt = 0;
        for (let i=0; i<exchange.length; i++) {
            cnt += n1%exchange[i];
            n1 = n1/exchange[i];
        }
        
	    print(cnt);
    }
}

function test1_1() {
    var obj = {
        "0": "19280",
        "1": "43820",
        "2": "49880",
        "3": "11070"
    };

    for( let key in obj ) 
	{
        let line = '';
		try {
            line = obj[key];
		}
		catch
		{
			break;
        }
        let n1 = parseInt(line)

        let exchange = Array(50000, 10000, 5000, 1000, 500, 100, 50, 10);
        let cnt = 0;
        for (let i=0; i<exchange.length; i++) {
            let tempVal = n1;
            if (n1>exchange[i]) {
                n1 = n1%exchange[i];
                cnt += Math.floor(tempVal/exchange[i]);
            }
        }
        
	    console.log(cnt);
    }
}


function test1_2() {
    var obj = {
        "0": "19280",
        "1": "43820",
        "2": "49880",
        "3": "11070"
    };

    for( let key in obj ) 
	{
        let line = '';
		try {
            line = obj[key];
		}
		catch
		{
			break;
        }
        let remain = parseInt(line)

        let exchange = Array(50000, 10000, 5000, 1000, 500, 100, 50, 10);
        let cnt = 0;
        for (let i=0; i<exchange.length; i++) {
            while(remain>=exchange[i]) remain=remain-exchange[i], cnt++;
        }
        
	    console.log(cnt);
    }
}

















var MAX_CACHE_SIZE = 100000 ;
var Cache = Array( MAX_CACHE_SIZE );
function get_recursive(n)
{
	if ( n == 1 ) return 1;
	else if ( n < MAX_CACHE_SIZE )
	{
		if ( !Cache[ n ] || Cache[ n ] == 0 )
		{
			if ( n % 2 == 0 )
				Cache[ n ] = get_recursive( n / 2 ) + 1 ;
			else
				Cache[ n ] = get_recursive( n + (n+1) / 2 ) + 2 ;
		}
		return Cache[ n ] ;
	}
	else
	{
		if ( n % 2 == 0 )
			return get_recursive( n / 2 ) + 1 ;
		else
			return get_recursive( n + ( n + 1) / 2 ) + 2 ;
	}
}




function test2()
{

	var obj = {
        "0": "1 22",
        "1": "1 10",
        "2": "100 200",
        "3": "201 210",
        "4": "900 1000"
    };

    for( let key in obj ) 
	{
		var line = '';
		try {
            line = obj[key].split(' ');
		}
		catch
		{
			break;
        }

		var n1 = parseInt(line[0]), n2 = parseInt(line[1]);
		var s = n1 < n2 ? n1 : n2 ;
		var e = n1 < n2 ? n2 : n1 ;
		var max = 0;
		
		for ( var i = s ; i <= e ; i ++ )
		{
			var t = get_recursive(i);
			if ( t > max ) max = t;
		}
		console.log(n1 + " " + n2 + " " + max );
	}
}

/* 
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
[Javascript] 3n+1
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
*/
function test2() {

    var obj = {
        "0": "1 22",
        "1": "1 10",
        "2": "100 200",
        "3": "201 210",
        "4": "900 1000"
    };

    for( let key in obj ) 
	{
        var line = '';
		try {
            line = obj[key].split(' ');
		}
		catch
		{
			break;
        }
        let n1 = parseInt(line[0]), n2 = parseInt(line[1]);
        let s = n1 < n2 ? n1 : n2 ;
        let e = n1 < n2 ? n2 : n1 ;
        let max =0;
        for (let k=s; e>=k; k++) {
            let cnt=1, compareVal = k;
            
            while(compareVal!=1){
                cnt++;
                if(compareVal%2!=0){
                    compareVal = compareVal*3+1; 
                } else {    
                    compareVal /= 2;
                }
            }

            if(cnt > max){
                max = cnt;
            }
        }
        console.log(n1 + " " + n2 + " " + max );
    }
}