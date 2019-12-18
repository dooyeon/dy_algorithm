









function today1_1() {
    var v1 = [
        5,3,7
    ];
    var v2 = [
        3,7,6
    ];
    v1.sort(function(a, b) { // 내림차순
        return b - a;
    });
    v2.sort(function(a, b) { // 내림차순
        return b - a;
    });
    //7 6 3
    //7 5 3
    var answer = 0;
    for (var i=0; i<v2.length; i++) {
        v1 = v1.filter(function(item) {
            return item < v2[i];
        })
        // for (var k=0; k<v1.length; k++) {
        //     if (v2[i] >= v1[k]) {
        //         v1.splice(k,1);
        //         v2.splice(i,1);
        //         i=0;
        //         answer++;
        //         break;
        //     }
        // }
    }
    console.log(answer);
}

function today3() {
    var v = [12, 80, 14, 22, 100];
    var tmp = 0;
    for (let i=0; i<v.length; i++) {
        let val = v[i];
        for (let k=2; k<v.length; k++) {

        }
    }
}

function today2() {
    var v = ["D5", "E8", "G2"];
    var pan = Array(Array(), Array(), Array(), Array(), Array(), Array(), Array(), Array());
    var answer = 0;
    for (var i=0; i<8; i++) {
        for (var j=0; j<8; j+=2){
            pan[i][j] = 0;
        }
    }
    // v.forEach(function(e){
    //     pan[changeA(e[0])][e[1]*1]=1;
    // });

    v.forEach(function(e){
        var x = changeA(e[0]);
        var y = (e[1]*1)-1;
        pan[x][y] = -1;
        for (let a=x-1, b=y-1; a>=0&&b>=0; a--,b--) {
            pan[a][b] = -1;
        }
        
        for (let a=x-1, b=y+1; a>=0&&b<8; a--,b++) {
            pan[a][b] = -1;
        }
        
        for (let a=x+1, b=y-1; a<8&&b>=0; a++,b--) {
            pan[a][b] = -1;
        }
        
        for (let a=x+1, b=y+1; a<8&&b<8; a++,b++) {
            pan[a][b] = -1;
        }
    });
    
    var answer = 0;
    for (var i=0; i<8; i++) 
        for (var j=0; j<8; j++)
            if (pan[i][j] == 0) {
                answer++
            }
        

    console.log(answer);

}
function changeA(val) {
    switch (val){
        case "A" :
            return 0;
        case "B" :
            return 1;
        case "C" :
            return 2;
        case "D" :
            return 3;
        case "E" :
            return 4;
        case "F" :
            return 5;
        case "G" :
            return 6;
        default :
            return 7;
    }
}

function today1() {
    var v1 = [
        5,3,7
    ];
    var v2 = [
        3,7,6
    ];
    v1.sort(function(a, b) { // 내림차순
        return b - a;
    });
    v2.sort(function(a, b) { // 내림차순
        return b - a;
    });
    //7 6 3
    //7 5 3
    var answer = 0;
    for (var i=0; i<v2.length; i++) {
        v1 = v1.filter(function(item) {
            return item < v2[i];
        })
        // for (var k=0; k<v1.length; k++) {
        //     if (v2[i] >= v1[k]) {
        //         v1.splice(k,1);
        //         v2.splice(i,1);
        //         i=0;
        //         answer++;
        //         break;
        //     }
        // }
    }
    console.log(answer);
}

function tst1() {
    var v = [
        [[1, 4], [3, 4], [3, 10]],
        [[1, 1], [2, 2], [1, 2]]
    ];
    var answer = [
    ];
    v.forEach(function(element) {
        let rst = [];
        let x = [];
        let y = [];
        element.forEach(function(e){
            x.push(e[0]);
        });
        element.forEach(function(e){
            y.push(e[1]);
        });

        let xVal = x.filter(function(e, i, arr) {
            var tmp = arr.slice();
            tmp.splice(i,1);
            if (tmp.indexOf(e) == -1) return e;
        })
        let yVal =  y.filter(function(e, i, arr) {
            var tmp = arr.slice();
            tmp.splice(i,1);
            if (tmp.indexOf(e) == -1) return e;
        })
        
        rst.push(xVal[0]);
        rst.push(yVal[0]);
        answer.push(rst);
    });
    console.log(answer);
}
