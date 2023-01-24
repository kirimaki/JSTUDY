// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 argunments 객체에 저장됨.
// 매개변수 기본값 Default Parameters a = 1, (a가 undefined 이면 1을 할당한다.)
function add(a = 1, b = 2) {
    console.log(a);
    console.log(b);
    console.log(arguments);
    return a + b;
}

console.log(add(5, 1));

// Rest 매개변수 Rest Parameters
function sum(a, b, ...numbers) {
    console.log(a);
    console.log(b);
    console.log(numbers);
    console.log(numbers[1])
}

sum(1, 2, undefined, null, NaN, false, true, 0, '0');
