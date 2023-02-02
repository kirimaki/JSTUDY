console.log(Number.EPSILON); // 0 과 1 사이에 나타낼 수 있는 숫자중 가장 작은 숫자

const num1 = 123;
const num2 = new Number(123); // 이렇게 작성하는것은 메모리 낭비가 될수 있음.

console.log(num1);
console.log(num2);

console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if(num1 === Number.NaN) {

}

if(Number.isNaN(num1)) {

}

if(num1 > Number.MAX_VALUE) {

}

// 지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG'));

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(2));

console.log(Number.EPSILON);
const num = 0.1 + 0.2 - 0.2; // 0.1000000000000003 실수끼리 연산은 이런 오차가 발생한다.
console.log(num);

function isEqual(original, expected) {
    return original === expected;
}

function isEqual2(original, expected) {
    return Math.abs(original - expected)
}

console.log(isEqual(1,1));
console.log(isEqual(0.1,0.1));
console.log(isEqual(num, 0.1));
console.log(isEqual2(num,0.1));
