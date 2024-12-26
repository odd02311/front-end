// 함수 선언
function helloFunc() {
  // 실행 코드
  console.log(1234);
}

helloFunc(); //1234

function returnFunc() {
  return 123;
}

let x = returnFunc();

console.log(x); // 123


// 함수 선언
function sum(a, b) {  // a 와 b는 매개변수 (Parameters)
  return a + b;
}

let a = sum(1, 2); // 1 과 2는 인수(Argumnts)
let b = sum(7, 12);
let c = sum(2, 4);

console.log(a, b, c);

// 기명(이름이 있는) 함수
// 선언
function hello() {
  console.log('Hello~');
}

// 익명(이름이 없는) 함수
let world = function () {
  console.log('World~');
}

// 함수 호출!
hello();
world();

// 객체 데이터
const person = {
  name: 'testName',
  age: 85,
  // 메소드(Method)
  getName: function () {
    return this.name;
  }
}

const hisName = person.getName();
console.log(hisName);
// or
console.log(person.getName());

/**
 * 함수: 특정 동작(기능)을 수행하는 일부 코드의 집합(부분) function
 * 
 **/