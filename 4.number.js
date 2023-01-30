console.log(Number.EPSILON); // 0 과 1 사이에 나타낼 수 있는 숫자중 가장 작은 숫자

const num1 = 123;
const num2 = new Number(123); // 이렇게 작성하는것은 메모리 낭비가 될수 있음.

console.log(num1);
console.log(num2);

console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE);