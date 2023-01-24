// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
//text = 'hi';
console.log(text);
 
const apple = {
    name : 'apple'
}

apple.name = 'not apple';
console.log(apple);