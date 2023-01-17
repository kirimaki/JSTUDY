// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 값음
// !== 값과 타입이 다름
console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == 3); // false
console.log(2 == '2'); // ************* true
console.log(2 === '2'); // *********** false
console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false
console.clear();

const obj1 = {
    name : 'js',
}

const obj2 = {
    name : 'js',
}

console.log(obj1 == obj2); // 주소값을 서로 비교 false
console.log(obj1.name === obj2.name); // 동일한 값과 타입을 가졌으므로 true 가 나온다.

let obj3 = obj2;
obj2.name = 'asdfsadfasf';
console.log(obj3 === obj2);



