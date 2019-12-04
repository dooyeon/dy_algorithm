
/* 
노드 내장 객체
global

브라우저의 window와 같은 전역 객체.
전역객체이므로 모든 파일에서 window(global).open => open 으로 호출 가능.

1. console
 console.time <> consoel.timeEnd
 console.log
 console.error
 console.dir
 console.trace

2. Time
 setTimeout   <> clearTimeout
 setInterval  <> clearInterval
 setImmediate <> clearImmediate

3. __filename, __dirname
 
4. module, exports
 module.exports === exports

5. process
 현재 실행되고 있는 프로세스 정보
 */


/* 
노드 내장 모듈
1. os
 운영체제 정보
2. path
 폴더와 파일의 경로를 쉽게 조작
 windows타입과 POSIX타입(macOS, linux)의 경로 구분자가 다르다
 path.sep - 경로의 구분자. windows: \ , posix: /
 path.delimiter - 환경변수의 구분자. windows: ; , posix: :
 path.dirname(경로) - 파일이 위치한 폴더 경로
 path.extname(경로) - 파일의 확장자
 path.basename(경로, 확장자) - 폴더경로 + 확장자, 파일의 이름만 표시하고 싶으면, 두번째 인자로 확장자를 넣어주면 된다.
 path.parse(경로) - 파일 경로를 root, dir, base, ext, name으로 분리
 path.normalize(경로) - / \를 혼용했을 때 정상으로 바꿈
 path.isAbsolute(경로) - 절대경로, 상대경로인지 true/false반환
 path. relative(기준경로, 비교경로) - 첫번째 param에서 두번째 경로로 가는 방법을 알려준다.
 path.join(경로, ...) - 여러 인자를 넣으면 하나의 경로로 합쳐줌.
 path.resolve(경로, ...) - path.join과 비슷
 
 join <> resolve 차이
  resolve는 /를 만나면 절대경로로 인식해서 앞의 경로를 무시하고, join은 상대경로로 처리한다.
    .join('/a', '/b', 'c') - /a/b/c/
    .join('/a', '/b', 'c') - /b/c

 \\ , \ 의 차이
  보통 \를 사용하지만 js문자열에선 \가 특수문자이므로 \\로 경로를 표시한다. ex: C:\node는 \n를 줄바꿈으로 인식. C:\\node 로 사용
  
Windows와 POSIX 스타일 사이에서 path모듈을 잘 사용해야 한다.


3.




 */
