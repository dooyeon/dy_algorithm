

/* 
[Javascript] es6연습
*/
main();


function main() {
    //목차

    //Map + Set + WeakMap + WeakSet
    // mapSetFnc();
    // objectLiteral();
    // arrayFunction();
    // destructAssignFnc();
    promiseFnc();
}

/* 
////////////////////////////////////////////////////////////////////////////////////
[Javascript] Promise 

////////////////////////////////////////////////////////////////////////////////////
*/
function promiseFnc() {
    
}

/* 
////////////////////////////////////////////////////////////////////////////////////
[Javascript] 비구조화 할당 destructuring assignment 
객체, 배열로부터 속성이나 요소를 쉽게 꺼낼수 있다.
node는 모듈을 사용하므로 이런 방식을 자주 사용.
////////////////////////////////////////////////////////////////////////////////////
*/
function destructAssignFnc() {
    let array = ['nodejs', {}, 10, true];

    let node = array[0];
    let obj = array[1];
    let bool = array[3];
    //위의 3라인을 아래로 바꿀수 있다.
    let [node1, obj1, , bool1] = array;
    console.log(node1, obj1, bool1);
}

/* 
////////////////////////////////////////////////////////////////////////////////////
[Javascript] 화살표 함수 Array function
function 선언 대신 => 기호로 함수를 선언.
변수에 대입하면 나중에 재사용 가능
기존의 function과 다른점은 this 바인드 방식.
아래 
1. relationship1의 forEach 안의 function에선, 각자 다른 스코프의 this를 가지므로, that에 this를 대입해서 사용
2. relationship2의 forEach는 화살표 함수를 사용했음. logFriends()의 this를 그대로 사용 가능.
////////////////////////////////////////////////////////////////////////////////////
*/
function arrayFunction() {
    const relationship1 = {
        name: 'zero',
        friends: [],
        logFriends: function() {
            let that = this; //relationship1을 가리키는 this를 that에 저장
            this.friends.forEach(function(friend) {
                console.log(that.name, friend);
            });
        }
    }
    relationship1.logFriends();

    const relationship2 = {
        name: 'zero',
        friends: [],
        logFriends() {
            this.friends.forEach(friend => {
                console.log(that.name, friend);
            });
        }
    }
}

/* 
////////////////////////////////////////////////////////////////////////////////////
[Javascript] 객체 리터럴
객체의 속성명을 동적으로 생성할 수 있다.
////////////////////////////////////////////////////////////////////////////////////
*/
function objectLiteral() {
    let sayNode = function() {
        console.log('Node');
    }
    let es = 'ES';
    const newObject = {
        sayJS() {
            console.log('JS');
        },
        sayNode,
        [es + 6]: '객체리터럴',
    };
    newObject.sayNode(); //Node
    newObject.sayJS(); //JS
    console.log(newObject.ES6); //객체리터럴
    
}



/* 
////////////////////////////////////////////////////////////////////////////////////
[Javascript] es6 Map, Set,
일반 알고리즘을 위한 효율적인 데이터 구조를 제공합니다.
WeakMap과 WeakSet는 메모리 누수로 부터 자유롭게 해줍니다. 
이들 내 저장된 객체에 다른 참조가 없는 경우, garbage collection 될 수 있습니다.
////////////////////////////////////////////////////////////////////////////////////
*/
function mapSetFnc() {
    // Sets
    var s = new Set();
    s.add("hello").add("goodbye").add("hello");
    console.log(s.size === 2);
    console.log(s.has("hello") === true);

    // Maps
    var m = new Map();
    m.set("hello", 42);
    m.set(s, 34);
    console.log(m.get(s) == 34);
    console.log(m.size);

    // Weak Maps
    var wm = new WeakMap();
    wm.set(s, { extra: 42 });
    console.log(wm.size);// undefined (사용된 곳이 없기 때문)

    // Weak Sets
    var ws = new WeakSet();
    ws.add({ data: 42 });
    console.log(ws.size);// undefined (사용된 곳이 없기 때문)
}