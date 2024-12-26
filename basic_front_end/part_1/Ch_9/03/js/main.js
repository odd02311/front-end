
let a = 2;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// 값(데이터)의 재할당 가능
a = 12;
console.log(a);

a = 999;
console.log(a);

// 값(데이터)의 재할당 불가
const c = 12;
console.log(c); // 12

// c = 999;
console.log(a); // TypeError: Assignment to constant variable.



/**
 *  변수: 데이터를 저장하고 참조(사용)하는 데이터의 이름
 *    var, let, const
 *  
 *  예약어: 특별한 의미를 가지고 있어, 변수나 함수 이름 등으로 사용할 수 없는 단어 Reserved Word
 *    this, if, break 을 변수명으로 쓴다면,  SyntaxError 
 *  
 **/