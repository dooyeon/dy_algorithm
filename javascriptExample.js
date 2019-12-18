



/* 
filter
 */
var testArray = [1,2,3,4,5];
var newArray = testArray.filter(function(element){
    return element<=3;
});


var testJson = [{name : "이건", salary : 50000000},
                {name : "홍길동", salary : 1000000},
                {name : "임신구", salary : 3000000},
                {name : "이승룡", salary : 2000000}];

var newJson = testJson.filter(function(element){
    console.log(element);
    return element.name == "이건";
}); 


/* 
map
 */
const oneTwoThree = [1, 2, 3];
let result = oneTwoThree.map((v) => {
  console.log(v);
  return v;
});

result = oneTwoThree.map((v) => {
    if (v % 2) {
      return '홀수';
    }
    return '짝수';
});
result; // ['홀수', '짝수', '홀수']




/* 
reduce, reduceRight
reduce를 덧셈 함수로 알고 계신 분들이 많은데, 
대부분의 사이트에서 reduce 사용 예시를 덧셈으로 들고 있기 때문입니다. 심지어 저도 강좌에서 덧셈으로 예를 들었습니다... 
하지만 reduce는 알고보면 매우 강력한 친구입니다. 함께 알아봅시다.

reduce 메서드는 다음과 같이 사용합니다. 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);

이전값이 아니라 누적값이라는 것에 주의하셔야 합니다. 누적값이기 때문에 다양하게 활용할 수 있습니다. 먼저 흔한 덧셈 예시를 살펴봅시다. 
 */

result = oneTwoThree.reduce((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc + cur;
}, 0);
// 0 1 0
// 1 2 1
// 3 3 2
result; // 6

// acc(누적값)이 초깃값인 0부터 시작해서 return하는대로 누적되는 것을 볼 수 있습니다. 
// 초깃값을 적어주지 않으면 자동으로 초깃값이 0번째 인덱스의 값이 됩니다.

result = oneTwoThree.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
});
// 1 2 1
// 3 3 2
result; // 6 


// reduceRight는 reduce와 동작은 같지만 요소 순회를 오른쪽에서부터 왼쪽으로 한다는 점이 차이입니다.  

result = oneTwoThree.reduceRight((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
}, 0);
// 0 3 2
// 3 2 1
// 5 1 0
result; // 6

result = oneTwoThree.reduce((acc, cur) => {
    acc.push(cur % 2 ? '홀수' : '짝수');
    return acc;
  }, []);
result; // ['홀수', '짝수', '홀수']


// reduce는 비동기 프로그래밍을 할 때에도 유용합니다.

const promiseFactory = (time) => {
  return new Promise((resolve, reject) => {
    console.log(time); 
    setTimeout(resolve, time);
  });
};
[1000, 2000, 3000, 4000].reduce((acc, cur) => {
  return acc.then(() => promiseFactory(cur));
}, Promise.resolve());
// 바로 1000
// 1초 후 2000
// 2초 후 3000
// 3초 후 4000
// 초깃값을 Promise.resolve()로 한 후에, 
// return된 프로미스에 then을 붙여 다음 누적값으로 넘기면 됩니다. 프로미스가 순차적으로 실행됨을 보장할 수 있습니다.

