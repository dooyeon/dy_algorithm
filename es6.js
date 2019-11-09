

/* 
[Javascript] es6연습
*/
main();


function main() {
    //목차

    //Map + Set + WeakMap + WeakSet
    mapSetFnc();
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