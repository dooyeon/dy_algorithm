
/* 
[Javascript] 연습
*/
main();


function main() {
    //목차

    // Scope();
    // hoisting();
    // letConst()
    // closerFnc();
    // mpaTest();
    callBackTest();
    // thisTest();
    // forTestFnc();
    // generatorFnc();
}
 
/* 
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
[Javascript] for In for Of
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
*/
function generatorFnc() {
    function* myGen() {
        yield 1;
        yield 2;
        yield 3;
        return 4;
      }
      
      const myItr = myGen();
      console.log(myItr.next());  // {value:1, done:false}
      console.log(myItr.next());  // {value:2, done:false}
      console.log(myItr.next());  // {value:3, done:false}
      console.log(myItr.next());  // {value:4, done:true}
}
/* 
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
[Javascript] for In for Of
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
*/
function forTestFnc() {
    var items = ['item1', 'item2', 'item3'];

    items.forEach(function(item) {
        console.log(item);
    });

    var obj = {
        a: 1, 
        b: 2, 
        c: 3
    };
    
    for (var prop in obj) {
        console.log(prop, obj[prop]); // a 1, b 2, c 3
    }

    var iterable = [10, 20, 30];

    for (var value of iterable) {
        console.log(value); // 10, 20, 30
    }

}

/* 
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
[Javascript] this
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
*/
function thisTest() {
    var data = 10;            // 1
    function MyClass () {
        this.data = 0;
    }
    MyClass.prototype.method1 =function () {
        function inner() {
            this.data = 20;        // 2
            data = 30;             // 3
    
            console.log("1. data = " + data);
            console.log("2. this.data = " +this.data); 
        }
        inner();
    }
    
    var my1 =new MyClass();
    my1.method1();
    
}

/* 
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
[Javascript] 콜백함수
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
*/
function callBackTest() {
    
    function callbackFunction (callback) {
        callback();
    }
     
    function testFunction() {
        var text ="callback function is closure";
        callbackFunction(function () {
            console.log(text);
        });
    }
    
    testFunction(); 
    
     
}
/* 
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
[Javascript] .map
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
*/
//for문은 continue나 break로 반복을 제어할 수 있지만
// map은 forEach와 마찬가지로 throw(예외)를 발생시키지 않으면 중간에 반복을 종료할 수 없다
function mapTest() {
    const arr = [0,1,2,3];

    let squaredArr = arr.map(function(element){
        return element * element;
    });
    // 혹은 arrow 함수 가능
    squaredArr = arr.map(element => element * element);

    console.log(squaredArr); // [ 0, 1, 4, 9 ]
}

function mapTest2() {
    const arr = [0,1,2,3];

    let squaredArr = arr.map(function(element, index, array){
        console.log(`${array}의 ${index}번째 인자 : ${element}`);
        return element * element;
    });
    /*
    0,1,2,3의 0번째 인자 : 0
    0,1,2,3의 1번째 인자 : 1
    0,1,2,3의 2번째 인자 : 2
    0,1,2,3의 3번째 인자 : 3
    */

    console.log(squaredArr); // [ 0, 1, 4, 9 ]
}

/* 
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
[Javascript] Scope
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
*/
function Scope() {
    if (true) {
        var scopeA = 100;
        function scopeFnc1() {
            scopeA = 200;
            console.log("1:" + scopeA); // 200
        }
        scopeFnc1();
        
        var scopeB = 10;
        function scopeFnc2() {
            console.log("2:" + scopeB); // undefined
            var scopeB = 20;
            console.log("3:" + scopeB); // 20
        }
        scopeFnc2();
        console.log("4:" + scopeB) //10
        
        // scopeA
    }
}
 

/* 
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
[Javascript] Hoisting
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
*/
function hoisting() {
    if (true) {
        var hVar1 = "aaa";
    }
    console.log(hVar1);

    h1();
    function h1() {
        var hVar2 = "bbb";
        console.log("ccc");
    }
}
//hoisting()이 호이스팅되면 hoisting2()
function hoisting2() {
    var hVar1; //선언문이 유효범위(hoisting2()내의 최상단으로)
    function h1() { //함수 '선언'도 최상단으로
        var hVar2; //h1() 내부 최상단
        hVar2 = "bbb"; //hVar2 할당
        console.log("ccc");
    }
    
    if (true) {
        hVar1 = "aaa"; //hVar1 할당
    }
    console.log(hVar1);
    h1();
}
//변수, 함수의 호이스팅 우선순위
function hoisting3() {
    var myName = "myName is String";

    function myName() {
        console.log("myName function");
    }
    function yourName() {
        console.log("yourName function");
    }

    var yourName = "yourName is String";

    console.log(typeof myName); //string
    console.log(typeof yourName); //string
}

//hoisting3()이 호이스팅되면 hoisting4()
function hoisting3() {
    var myName;
    var yourName;

    function myName() {
        console.log("myName function");
    }
    function yourName() {
        console.log("yourName function");
    }

    myName = "myName is String";
    yourName = "yourName is String";

    console.log(typeof myName); //string
    console.log(typeof yourName); //string
}

/* 
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
[Javascript] Let, Const
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
*/
function letConst() {
    let a = 10;
    let b = 20;

    {
        console.log(a); //10
    }

    {
        console.log(b); // b is not defined
        let b = 30;
        console.log(b); // 30
    }
    console.log(b); // 20
}
//letConst()이 호이스팅되면 letConst2()
function letConst2() {
    let a;
    let b;
    a = 10;
    b = 20;

    {
        console.log(a); //10
    }

    {
        let b; // 호이스팅되었지만, temporal dead zone에 있기 때문에, 참조할 수 없다.
        console.log(b); // b is not defined
        b = 30; //할당
        console.log(b); // 30
    }
    console.log(b); // 20
}
 
/* 
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
[Javascript] Closer
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
*/
function closerFnc() {
    function outer(){
        var innerValue = 'remember';
        function innerFnc(){
          console.log(innerValue);
        }
        //outer함수 내부에 innerFnc선언 후 return
        return innerFnc;
      }
      
    var globalFnc = outer();
    globalFnc();
}

//캡슐화 예제
function closerFnc1() {
    function student(name, score){
        // var name = name, score = score;
        return {
          setScore: function(_score){
            score = _score;
          },
          getInfo: function(){
            return { name:name, score:score };
          }
        }
      }
      
      var lee = student("sunsin", 80);
      var kim = student("yusin", 75);
      
      lee.setScore(60);
      
      console.log(lee.getInfo()); // { name: 'sunsin', score: 60 }
      console.log(kim.getInfo()); // { name: 'yusin', score: 75 }
      console.log(kim.score); // undefined
      console.log(kim.name); // undefined
}

//싱글톤 예제
function closerFnc2() {
    function student(name, score){
        // var name = name, score = score;
        return {
          setScore: function(_score){
            score = _score;
          },
          getInfo: function(){
            return { name:name, score:score };
          }
        }
      }
      
      var lee = student("sunsin", 80);
      var kim = student("yusin", 75);
      
      lee.setScore(60);
      
      console.log(lee.getInfo()); // { name: 'sunsin', score: 60 }
      console.log(kim.getInfo()); // { name: 'yusin', score: 75 }
}

//함수 오류 예제
function closerFnc3() {
    var arr = [];
    for(var i=0;i<5;i++){
        arr[i] = function(){
            return i;
        }
    }
    for(var j=0;j<arr.length;j++) {
        console.log(arr[j]());
    }
}

function closerFnc3_1() {
    var arr = [];
    for(var i = 0; i < 5; i++){
        arr[i] = function(i){
            return function(){
                return i;
            }
        }(i);
    }
    for(var j=0;j<arr.length;j++) {
        console.log(arr[j]());
    }
}

function closerFnc3_2() {
    var arr = [];
    for(let i=0;i<5;i++){
        arr[i] = function(){
            return i;
        }
    }
    for(var j=0;j<arr.length;j++) {
        console.log(arr[j]());
    }
}
