// 단항연산자 Unary Operators
// + (양)
// - (음)
// ! (부정연산자)

let a = 5;
a = -a; // -1 * 5
console.log(a);
console.log(-a);
a = -a;
console.log(a)

a = +a;
console.log(a) 

a = -a;
a = +a;
console.log(a) // -5

let boolean = true;
console.log(boolean);
console.log(!boolean); // false
console.log(!!boolean); // true
console.log(!!!boolean); // false

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤값이 나오는지 확인할 수 있음
console.clear();
console.log(+false); // 0
console.log(false); // false
console.log(+true); // 1
console.log(+''); // 0
console.log(+'text'); // NaN
console.log(+null); // 0

console.log(!!1); // boolean 형이 아닌 데이터를 boolean형으로 나타내고 싶을때!
