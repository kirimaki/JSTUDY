// 함수 선언문 function name() { }
// 함수 표현식 const name = function() { }
// 화살표 함수 const name = () => { }
let add = function (a, b) {
    return a + b;
};

const add2 = (a, b) => {
    // 블럭이 있으면 return을 해주어야함.
    return a + b;
}

// 블럭이 없으면 return 생략가능!
const add3 = (a, b) => a + b; 

console.log(add(1, 2));

add = (a, b) =>  a - b;

console.log(add(3, 4));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE Immediately-Invoked Function Expressions)
(function run() {
    console.log('😍');
})();

!function run() {
	console.log('우잉!?');
}();

(() => {
	console.log('화살표함수는 요것도댐!?');
})();