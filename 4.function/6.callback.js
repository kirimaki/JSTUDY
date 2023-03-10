// 일급함수를 지원하는 언어 (java8 , 코틀린, 스위프트, 파이썬)

// 일급함수의 특징
// 1. 함수의 매개변수로 전달 가능 (매개변수로 함수를 전달하는것이 가능하다)
// 2. 함수의 반환값으로 사용 (return 함수가 가능하다)
// 3. 할당 명령문 <-- (변수에 함수를 할당하는것이 가능하다)
// 4. 동일 비교대상 ??

// 고차함수 (Higher - order function)
// 인자로 함수를 받거나(콜백함수) 함수를 반환하는 함수를 고차함수!

// 콜백함수
const add = (a, b) => {
    console.log("뭐죠")
    return a + b;
}

const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)이 전달된다.
// 그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨
function calculator(a, b, action) {
    let result = action(a, b);
    console.log(result);
    return result;
}

calculator(1, 2, add);
calculator(2, 3, multiply);